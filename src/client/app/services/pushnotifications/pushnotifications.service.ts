import { IPushNotificationsService, PUSH_NOTIFICATIONS_SERVICE_URL } from "./ipushnotifications.service";
import { Inject } from "@angular/core";

declare class io {
    static connect(url: string): any;
}

const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';
const INVALID_PUSH_NOTIFICATIONS_SERVICE_URL = 'Invalid Push Notifications Service URL specified!';
const MIN_PUSH_INDEX_VALUE = 0;
const MIN_CALLBACKS_LENGTH = 1;
const NEW_CUSTOMER_EVENT = 'NewCustomerRecord';

class PushNotificationsService implements IPushNotificationsService {
    constructor(
        @Inject(PUSH_NOTIFICATIONS_SERVICE_URL)
        private pushNotificationsServiceUrl: string) {
        if (!this.pushNotificationsServiceUrl) {
            throw new Error(INVALID_PUSH_NOTIFICATIONS_SERVICE_URL);
        }

        this.initializeWSListener();
    }

    initializeWSListener() {
        let socketClient = io.connect(this.pushNotificationsServiceUrl);

        socketClient.on(NEW_CUSTOMER_EVENT,
            (notificationMessage: any) => {
                if (this.registeredCallbacks && this.registeredCallbacks.length >= MIN_CALLBACKS_LENGTH) {
                    for (let callback of this.registeredCallbacks) {
                        callback(notificationMessage);
                    }
                }
            });
    }

    private registeredCallbacks: ((notificationMessage: any) => void)[] = [];

    registerCallback(callback: (notificationMessage: any) => void): boolean {
        let validation = callback && typeof callback === 'function';

        if (!validation)
            throw new Error(INVALID_ARGUMENTS);

        let pushIndex = this.registeredCallbacks.push(callback);

        return pushIndex >= MIN_PUSH_INDEX_VALUE;
    }
}

export { PushNotificationsService };
