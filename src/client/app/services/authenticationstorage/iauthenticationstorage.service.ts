import { InjectionToken } from "@angular/core";

const AUTH_STORAGE_SERVICE_TOKEN =
    new InjectionToken<IAuthenticationStorageService>('authStorageService');

interface IAuthenticationStorageService {
    setAuthToken(authToken: string): void;
    getAuthToken(): string;
    resetAuthToken(): void;
}

export { IAuthenticationStorageService, AUTH_STORAGE_SERVICE_TOKEN };
