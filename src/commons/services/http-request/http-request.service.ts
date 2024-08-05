import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosHeaders, AxiosResponse } from 'axios';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { CHttpRequest } from 'src/commons/class';

@Injectable()
export class HttpRequestService extends CHttpRequest {

    constructor(
        private readonly _http: HttpService
    ) {
        super();
    }

    get<T>(url: string, headers: Record<string, any>): Observable<AxiosResponse<T>> {
        return this.handlerResponse(this._http.get<T>(url, { headers: new AxiosHeaders(headers) }));
    }

    post<T>(url: string, body: Record<string, any>, headers: Record<string, any>): Observable<AxiosResponse<T>> {
        return this.handlerResponse(this._http.post<T>(url, body, { headers: new AxiosHeaders(headers) }));
    }

    put<T>(url: string, body: Record<string, any>, headers: Record<string, any>): Observable<AxiosResponse<T>> {
        return this.handlerResponse(this._http.put<T>(url, body, { headers: new AxiosHeaders(headers) }));
    }

    patch<T>(url: string, body: Record<string, any>, headers: Record<string, any>): Observable<AxiosResponse<T>> {
        return this.handlerResponse(this._http.patch<T>(url, body, { headers: new AxiosHeaders(headers) }));
    }

    delete<T>(url: string, headers: Record<string, any>): Observable<AxiosResponse<T>> {
        return this.handlerResponse(this._http.delete<T>(url, { headers: new AxiosHeaders(headers) }));
    }


    /**
     * @description Method to help response handling
     * @param { Observable<AxiosResponse<T>> } response 
     * @returns Observable<AxiosResponse<T>>
     * TODO Verificar porque el catchError falla cuando colocamos <AxiosResponse<T>, Error>
     * TODO Agregar un servicio que genere un error dependiendo del status code
     * TODO Agregar un servicio de logger
     */
    private handlerResponse<T>(response: Observable<AxiosResponse<T>>): Observable<AxiosResponse<T>> {
        return response.pipe(
            tap<AxiosResponse<T>>((response: AxiosResponse<T>) => console.log(response)),
            map<AxiosResponse<T>, T>((response: AxiosResponse<T>) => response.data),
            catchError<any, any>((err) => {
                console.error(err)
                throw new Error(err);
            })
        );
    }


}
