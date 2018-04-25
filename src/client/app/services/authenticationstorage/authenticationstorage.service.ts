import { IAuthenticationStorageService } from "./iauthenticationstorage.service";

const FMR_AUTH_TOKEN_KEY: string = 'fmratk';

class AuthenticationStorageService implements IAuthenticationStorageService {
    setAuthToken(authToken: string): void {
        if (authToken) {
            localStorage.setItem(FMR_AUTH_TOKEN_KEY, authToken);
        }
    }

    getAuthToken(): string {
        let authToken = localStorage.getItem(FMR_AUTH_TOKEN_KEY);

        return authToken;
    }

    resetAuthToken(): void {
        localStorage.removeItem(FMR_AUTH_TOKEN_KEY);
    }
}

export { AuthenticationStorageService };
