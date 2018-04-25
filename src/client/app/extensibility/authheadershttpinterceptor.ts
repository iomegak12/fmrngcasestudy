import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IAuthenticationStorageService, AUTH_STORAGE_SERVICE_TOKEN } from "../services/authenticationstorage/iauthenticationstorage.service";
import { Inject } from "@angular/core";

const INVALID_AUTH_STORAGE_SERVICE = 'Invalid Authentication Storage Service Specified!';
const MIN_TOKEN_LENGTH = 10;

class AuthHeadersHttpInterceptor implements HttpInterceptor {
    constructor(
        @Inject(AUTH_STORAGE_SERVICE_TOKEN)
        private authenticationStorageService: IAuthenticationStorageService) {
        if (!this.authenticationStorageService)
            throw new Error(INVALID_AUTH_STORAGE_SERVICE);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authToken = this.authenticationStorageService.getAuthToken();
        let isAuthTokenValid = authToken && authToken.length >= MIN_TOKEN_LENGTH;
        let nextRequest: HttpRequest<any> = req;

        if (isAuthTokenValid) {
            let httpAuthToken = `Bearer ${authToken}`;
            
            nextRequest = req.clone({
                setHeaders: {
                    'Authorization': httpAuthToken
                }
            });
        }

        return next.handle(nextRequest);
    }
}

export { AuthHeadersHttpInterceptor };
