import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('example')
export class ExampleController {

    @Get()
    getInfo(): Observable<string> {
        return of('This is an example endpoint');
    }
}
