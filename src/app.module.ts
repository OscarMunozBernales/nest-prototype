import { Module } from '@nestjs/common';
import { HealthCheckModule } from './components/health-check/health-check.module';
import { ExampleModule } from './components/example/example.module';
import { ConfigModule } from '@nestjs/config';
import { configEnvironments } from './configs';

@Module({
  imports: [
    ConfigModule.forRoot(configEnvironments),
    HealthCheckModule,
    ExampleModule
  ]
})
export class AppModule{}
