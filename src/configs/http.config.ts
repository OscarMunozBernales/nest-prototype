import { ConfigService } from "@nestjs/config";

export const configHttp = async ( configService: ConfigService ) => ({
    timeout: configService.get<number>('HTTP_TIMEOUT')
})