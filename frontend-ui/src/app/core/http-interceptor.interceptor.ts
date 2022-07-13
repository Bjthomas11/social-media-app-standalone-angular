import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, EMPTY, finalize, Observable, retry } from 'rxjs';
import { LoaderService } from './services/loader/loader.service';

@Injectable()
export class HttpInterceptors implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loaderService.showLoader();
    return next.handle(req).pipe(
      finalize(() => {
        return this.loaderService.hideLoader();
      })
    );
  }
}
