import { Module } from '@nestjs/common';
import { HealthCheckModule } from './components/health-check/health-check.module';
import { ExampleModule } from './components/example/example.module';

@Module({
  imports: [
    HealthCheckModule,
    ExampleModule
  ]
})
export class AppModule{}
