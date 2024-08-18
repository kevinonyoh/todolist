/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger = new Logger(AllExceptionsFilter.name);

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const httpExceptionMessage = exception?.response?.data?.message || exception?.response?.message || exception?.message;
        
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';

        if (exception instanceof HttpException) {
            status = exception.getStatus();
            message = httpExceptionMessage;
            this.logger.debug('Http error occurred');
        }
        
        if (typeof exception === 'string') {
            status = 400;
            message = exception;
            this.logger.debug('An error occurred');
        }

       
        (exception instanceof Error) && this.logger.debug('JavaScript error occurred');

        this.logger.error(exception.stack);
        

        this.logger.error(JSON.stringify(exception.message));
        

        response.status(status).json({
            statusCode: status,
            message,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}
