import { Module } from '@nestjs/common';
import { HttpRequestService } from './http-request.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { configHttp } from 'src/configs';

@Module({
  providers: [
    HttpRequestService
  ],
  imports: [
    HttpModule.registerAsync({
      imports: [ ConfigModule ],
      useFactory: configHttp
    })
  ],
})
export class HttpRequestModule {}
