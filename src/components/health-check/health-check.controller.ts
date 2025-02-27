import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, of } from 'rxjs';

@Controller('health-check')
export class HealthCheckController {

    @Post()
    healthCheck(
        @Req() request: Request,
        // @Res() response: Response
    ): Observable<string> {
        console.log("🚀 ~ HealthCheckController ~ request:", request.body, request.headers);
        return of(request.body);
    }
}
