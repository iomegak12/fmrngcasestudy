import { IAuthenticationService, AUTH_SERVICE_URL_TOKEN } from "./iauthentication.service";
import { Observable } from "rxjs/Observable";
import { Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const INVALID_AUTH_SERVICE_URL = 'Invalid Authentication Service URL Specified!';
const INVALID_HTTP_SERVICE = 'Invalid Http Service Specified!';

class AuthenticationService implements IAuthenticationService {
    private authenticationServiceUrl: string = '';

    constructor(
        private httpClient: HttpClient,
        @Inject(AUTH_SERVICE_URL_TOKEN)
        private authenticationServiceBaseUrl: string) {
        if (!authenticationServiceBaseUrl)
            throw new Error(INVALID_AUTH_SERVICE_URL);

        this.authenticationServiceUrl = `${authenticationServiceBaseUrl}/authenticate`;
    }

    authenticate(userName: string, password: string): Observable<any> {
        if (!this.httpClient)
            throw new Error(INVALID_HTTP_SERVICE);

        let result = this.httpClient.post<any>(this.authenticationServiceUrl, {
            userId: userName,
            password
        });

        return result;
    }
}

export { AuthenticationService };
