import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('health-check')
export class HealthCheckController {

    @Get()
    healthCheck(): Observable<string> {
        return of('I am alive!');
    }
}
