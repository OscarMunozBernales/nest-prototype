import { Module } from '@nestjs/common';
import { HealthCheckModule } from './components/health-check/health-check.module';
import { ExampleModule } from './components/example/example.module';
import { ConfigModule } from '@nestjs/config';
import { ENV_CONFIG } from '@config/env.config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CriptoJsInterceptor } from '@interceptors/cripto-js.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot(ENV_CONFIG),
    HealthCheckModule,
    ExampleModule
  ],
})
export class AppModule{}
