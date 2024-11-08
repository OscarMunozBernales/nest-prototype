import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { HttpRequestModule } from '@services/index';

@Module({
  controllers: [ExampleController],
  imports: [
    HttpRequestModule
  ],
})
export class ExampleModule {}
