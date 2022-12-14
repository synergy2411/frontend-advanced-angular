import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("[REQUEST]", request);
    return next.handle(request)               // allows the request to reach to server
      .pipe(tap(value => console.log("[RESPONSE]", value)));        // debugging the observables - 'tap' operator
  }
}
