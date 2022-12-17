import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  validateRequest(request: Request): boolean | Promise<boolean> | Observable<boolean> {
    return of(true);
  }
}
