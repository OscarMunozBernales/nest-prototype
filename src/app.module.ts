import { Module } from '@nestjs/common';
import { HealthCheckModule } from './components/health-check/health-check.module';
import { ExampleModule } from './components/example/example.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { CENV } from './configs';

@Module({
  imports: [
    ConfigModule.forRoot(CENV),
    HealthCheckModule,
    ExampleModule
  ]
})
export class AppModule{}
