import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class CriptoJsInterceptor implements NestInterceptor {

  private SECRET_KEY: string = ''

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    this.SECRET_KEY = request.headers.codigosesion;
    if (request.body?.data) {
      const bytes = CryptoJS.AES.decrypt(request.body.data, this.SECRET_KEY);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

      if (!decryptedData) throw new Error('Invalid data');
      request.body = JSON.parse(decryptedData);
    }
    return next.handle().pipe(
      map((data) => {
        // Convertir la clave en un formato válido
        const secretKeyParsed = CryptoJS.enc.Utf8.parse(this.SECRET_KEY);

        // Cifrar la respuesta y convertirla en string Base64
        const encryptedData = CryptoJS.AES.encrypt(data, secretKeyParsed, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        }).toString();  // ✅ Agregar `.toString()`

        return { data: encryptedData }; // ✅ Ahora devuelve una cadena encriptada correctamente
      })
    );
  }
}
