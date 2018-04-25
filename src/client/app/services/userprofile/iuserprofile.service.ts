import { InjectionToken } from "@angular/core";
import { Subject } from "rxjs/Subject";

const USER_PROFILE_SERVICE_TOKEN =
    new InjectionToken<IUserProfileService>('userProfileService');

interface IUserProfileService {
    loginName: string;
    isAuthenticated: boolean;
    broadcaster: Subject<boolean>;

    setAuthProfile(loginName: string, isAuthenticated: boolean): void;
}

export { USER_PROFILE_SERVICE_TOKEN, IUserProfileService };
