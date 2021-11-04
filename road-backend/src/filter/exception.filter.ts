import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TypeORMError } from 'typeorm';

/**
 *  HttpException 상속 list
    BadRequestException
    UnauthorizedException
    NotFoundException
    ForbiddenException
    NotAcceptableException
    RequestTimeoutException
    ConflictException
    GoneException
    HttpVersionNotSupportedException
    PayloadTooLargeException
    UnsupportedMediaTypeException
    UnprocessableEntityException
    InternalServerErrorException
    NotImplementedException
    ImATeapotException
    MethodNotAllowedException
    BadGatewayException
    ServiceUnavailableException
    GatewayTimeoutException
    PreconditionFailedException
 */

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    console.log(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status;
    let message;

    // 더 좋은 구조가 없을까?
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
    } else if (exception instanceof TypeORMError) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = exception.message;
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = `server error`;
    }

    return response.status(status).json({
      statusCode: status,
      message: message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
