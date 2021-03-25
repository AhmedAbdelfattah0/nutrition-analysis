import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError, finalize, retry } from 'rxjs/operators';

@Injectable()
export class HttpCallInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

 var   authReq = request.clone({
      url: `${environment.bas_Url}${request.url}` ,
      setHeaders: {
       'Content-type': 'application/json; charset=UTF-8',

   } })

   return new Observable((observer) => {

    next.handle(authReq).subscribe(  (res) => {
                if (res instanceof HttpResponse) {
                    observer.next(res);
                }
            },
             (err: HttpErrorResponse) => {
                retry(1)
                let errorMessage = '';
                switch (err.status) {
                    case 400:
                        errorMessage = `${err.status}: Bad Request.`;
                        break;

                    case 401:
                        errorMessage = `${err.status}: Not Authorized.`;
                        break;

                    case 403:
                        errorMessage = `${err.status}: You don't have permission.`;
                        break;

                    case 404:
                        errorMessage = `${err.status}: Not found.`;
                        break;

                    case 412:
                        errorMessage = `${err.status}: Precondition failed.`;
                        break;

                    case 500:
                        errorMessage =err.error.error.details? `${err.status}: Internal Server Error: ${err.error.error.message}\n${err.error.error.details}`:`${err.status}: Internal Server Error: ${err.error.error.message}`;
                        break;

                    case 503:
                        errorMessage = `${err.status}: The requested service is not available.`;
                        break;

                    default:
                        errorMessage = 'Something went wrong.';
                }

            }
        );
});

  }
}
