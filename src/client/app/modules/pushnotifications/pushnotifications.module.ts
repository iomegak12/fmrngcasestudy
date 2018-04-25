import { NgModule } from "@angular/core";
import { PUSH_NOTIFICATIONS_SERVICE, PUSH_NOTIFICATIONS_SERVICE_URL } from "../../services/pushnotifications/ipushnotifications.service";
import { PushNotificationsService } from "../../services/pushnotifications/pushnotifications.service";

@NgModule({
    providers: [
        {
            provide: PUSH_NOTIFICATIONS_SERVICE,
            useClass: PushNotificationsService
        },
        {
            provide: PUSH_NOTIFICATIONS_SERVICE_URL,
            useFactory: () => {
                let buildType = String('<%= BUILD_TYPE %>');

                if (buildType === 'prod') {
                    return String('<%= PROD_PUSH_NOTIFICATIONS_SERVICE_URL %>');
                }

                return String('<%= DEV_PUSH_NOTIFICATIONS_SERVICE_URL %>');
            }
        }
    ]
})
class PushNotificationsModule {
    constructor() {
        console.log('Push Notifications Module Initialized!');
    }
}

export { PushNotificationsModule };