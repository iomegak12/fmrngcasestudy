import { Observable } from "rxjs/Observable";
import { InjectionToken } from "@angular/core";

const AUTH_SERVICE_URL_TOKEN = new InjectionToken<string>('authServiceUrl');
const AUTH_SERVICE_TOKEN= new InjectionToken<IAuthenticationService>('authService');

interface IAuthenticationService {
    authenticate(userName: string, password: string): Observable<any>;
}

export { IAuthenticationService, AUTH_SERVICE_TOKEN, AUTH_SERVICE_URL_TOKEN };
