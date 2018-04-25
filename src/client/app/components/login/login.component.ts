import { Component, Input, Inject } from "@angular/core";
import { IAuthenticationService, AUTH_SERVICE_TOKEN } from "../../services/authentication/iauthentication.service";
import { IAuthenticationStorageService, AUTH_STORAGE_SERVICE_TOKEN } from "../../services/authenticationstorage/iauthenticationstorage.service";
import { IUserProfileService, USER_PROFILE_SERVICE_TOKEN } from "../../services/userprofile/iuserprofile.service";
import { Router } from "@angular/router";

const INVALID_DEPENDENCY_SERVICES = 'Invalid Dependency Service(s) Specified!';
const AUTH_FAILURE = 'Authentication Failed!';
const REDIRECT_URI_AFTER_LOGIN = 'home';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    selector: 'login-component'
})
class LoginComponent {
    @Input()
    public userName: string;
    @Input()
    public password: string;
    public errorMessage: string = '';

    constructor(
        @Inject(AUTH_SERVICE_TOKEN)
        private authenticationService: IAuthenticationService,
        @Inject(AUTH_STORAGE_SERVICE_TOKEN)
        private authenticationStorageService: IAuthenticationStorageService,
        @Inject(USER_PROFILE_SERVICE_TOKEN)
        private userProfileService: IUserProfileService,
        private routerService: Router) {
        let validation = this.authenticationService && this.authenticationStorageService &&
            this.userProfileService && this.routerService;

        if (!validation)
            throw new Error(INVALID_DEPENDENCY_SERVICES);
    }

    login() {
        this.authenticationService
            .authenticate(this.userName, this.password)
            .subscribe(
                result => {
                    let status = result && result.token;

                    if (status) {
                        this.authenticationStorageService.setAuthToken(result.token);
                        this.userProfileService.setAuthProfile(this.userName, status);
                        this.routerService.navigate([REDIRECT_URI_AFTER_LOGIN]);
                    }
                },
                error => {
                    this.errorMessage = AUTH_FAILURE;
                });
    }
}

export { LoginComponent };
