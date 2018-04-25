import { NgModule, Inject } from "@angular/core";
import { LoginComponent } from "../../components/login/login.component";
import { AUTH_SERVICE_URL_TOKEN, AUTH_SERVICE_TOKEN } from "../../services/authentication/iauthentication.service";
import { AuthenticationService } from "../../services/authentication/authentication.service";
import { USER_PROFILE_SERVICE_TOKEN } from "../../services/userprofile/iuserprofile.service";
import { UserProfileService } from "../../services/userprofile/userprofile.service";
import { AUTH_STORAGE_SERVICE_TOKEN, IAuthenticationStorageService } from "../../services/authenticationstorage/iauthenticationstorage.service";
import { AuthenticationStorageService } from "../../services/authenticationstorage/authenticationstorage.service";
import { securityRouteDefinitions } from "../../routing/security/security.routes";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthHeadersHttpInterceptor } from "../../extensibility/authheadershttpinterceptor";

@NgModule({
    imports: [FormsModule, securityRouteDefinitions, HttpClientModule],
    declarations: [LoginComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHeadersHttpInterceptor,
            multi: true
        },
        {
            provide: AUTH_SERVICE_URL_TOKEN,
            useFactory: () => {
                let buildType = String('<%= BUILD_TYPE %>');

                if (buildType === 'prod') {
                    return String('<%= PROD_AUTH_SERVICE_BASE_URL %>');
                }

                return String('<%= DEV_AUTH_SERVICE_BASE_URL %>');
            }
        },
        {
            provide: AUTH_SERVICE_TOKEN,
            useClass: AuthenticationService
        },
        {
            provide: USER_PROFILE_SERVICE_TOKEN,
            useClass: UserProfileService
        },
        {
            provide: AUTH_STORAGE_SERVICE_TOKEN,
            useClass: AuthenticationStorageService
        }
    ]
})
class SecurityModule {
    constructor(
        @Inject(AUTH_STORAGE_SERVICE_TOKEN)
        private authenticationStorageService: IAuthenticationStorageService) {
        if (this.authenticationStorageService) {
            this.authenticationStorageService.resetAuthToken();
        }
    }
}

export { SecurityModule };
