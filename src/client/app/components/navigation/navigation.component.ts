import { Component, Inject } from "@angular/core";
import { IUserProfileService, USER_PROFILE_SERVICE_TOKEN } from "../../services/userprofile/iuserprofile.service";
import { IAuthenticationStorageService, AUTH_STORAGE_SERVICE_TOKEN } from "../../services/authenticationstorage/iauthenticationstorage.service";
import { Router } from "@angular/router";

const INVALID_USER_PROFILE_SERVICE = 'Invalid User Profile Service Specified!';
const INVALID_AUTH_STORAGE_SERVICE = 'Invalid Authentication Storage Service Specified!';
const INVALID_ROUTER_SERVICE = 'Invalid Router Service Specified!';
const GUEST_LOGIN = '';
const REDIRECT_URI_AFTER_LOGOUT = 'home';

@Component({
    moduleId: module.id,
    selector: 'navigation-component',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.css']
})
class NavigationComponent {
    public errorMessage: string = '';
    public isAuthenticated: boolean = false;
    public userName: string = '';

    constructor(
        @Inject(USER_PROFILE_SERVICE_TOKEN)
        private userProfileService: IUserProfileService,
        @Inject(AUTH_STORAGE_SERVICE_TOKEN)
        private authenticationStorageService: IAuthenticationStorageService,
        private routerService: Router) {

        if (!this.userProfileService)
            throw new Error(INVALID_USER_PROFILE_SERVICE);

        if (!this.authenticationStorageService)
            throw new Error(INVALID_AUTH_STORAGE_SERVICE);

        if (!this.routerService)
            throw new Error(INVALID_ROUTER_SERVICE);

        this.initializeSubscriber();
    }

    initializeSubscriber() {
        this.userProfileService
            .broadcaster
            .subscribe(
                authStatus => {
                    this.isAuthenticated = authStatus;

                    if (this.isAuthenticated) {
                        this.userName = this.userProfileService.loginName;
                    } else { this.userName = ''; }
                },
                error => this.errorMessage = `Error Occurred, Details : ${JSON.stringify(error)}`);
    }

    logout() {
        this.authenticationStorageService.resetAuthToken();
        this.userProfileService.setAuthProfile(GUEST_LOGIN, false);
        this.routerService.navigate([REDIRECT_URI_AFTER_LOGOUT]);
    }
}

export { NavigationComponent };
