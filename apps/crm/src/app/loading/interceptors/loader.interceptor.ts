import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private requests: HttpRequest<any>[] = [];

  constructor(private readonly loadingService: LoadingService) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  removeRequest(req: HttpRequest<any>): void {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }

    this.loadingService.isLoading.next(this.requests.length > 0);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requests.push(req);

    console.log('Number of requests--->', this.requests.length);

    this.loadingService.isLoading.next(true);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new Observable((observer: Observer<any>) => {
      const subscription = next.handle(req).subscribe(
        event => {
          if (event instanceof HttpResponse) {
            this.removeRequest(req);
            observer.next(event);
          }
        },
        error => {
          console.log('Error', error);
          this.removeRequest(req);
          observer.error(error);
        },
        () => {
          this.removeRequest(req);
          observer.complete();
        },
      );

      return () => {
        this.removeRequest(req);
        subscription.unsubscribe();
      };
    });
  }
}
