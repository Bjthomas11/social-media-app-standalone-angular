import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoaderService } from './services/loader/loader.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = '';
        if (error.error instanceof ErrorEvent) {
          // handle client-side error
          message = `Error: ${error.error.message}`;
        } else {
          // handle server-side error
          message = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(message);
        this.loaderService.showLoader();
        return throwError(message);
      })
    );
  }
}
