import { IUserProfileService } from "./iuserprofile.service";
import { Subject } from "rxjs/Subject";

class UserProfileService implements IUserProfileService {
    private _loginName: string = '';
    private _isAuthenticated: boolean = false;
    private _broadcaster: Subject<boolean>;

    constructor() {
        this._broadcaster = new Subject<boolean>();
    }

    setAuthProfile(loginName: string, isAuthenticated: boolean) {
        this._loginName = loginName;
        this._isAuthenticated = isAuthenticated;

        this._broadcaster.next(this._isAuthenticated);
    }

    get loginName() {
        return this._loginName;
    }

    get isAuthenticated() {
        return this._isAuthenticated;
    }

    get broadcaster() {
        return this._broadcaster;
    }
}

export { UserProfileService };
