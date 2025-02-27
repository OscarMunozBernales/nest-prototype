import { Module } from '@nestjs/common';
import { HttpRequestService } from './http-request.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [
    HttpRequestService
  ],
  imports: [
    HttpModule.registerAsync({
      imports: [ ConfigModule ],
      useFactory: async ( configService: ConfigService) => {
        console.log(configService);
        return {

        }
      }
    })
  ],
})
export class HttpRequestModule {}
