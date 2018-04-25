import { InjectionToken, Inject } from "@angular/core";

const PUSH_NOTIFICATIONS_SERVICE_URL: InjectionToken<string> =
    new InjectionToken<string>('pushNotificationsServiceUrl');

const PUSH_NOTIFICATIONS_SERVICE: InjectionToken<IPushNotificationsService> =
    new InjectionToken<IPushNotificationsService>('pushNotificationsService');

interface IPushNotificationsService {
    registerCallback(callback: (notificationMessage: any) => void): boolean;
}

export { IPushNotificationsService, PUSH_NOTIFICATIONS_SERVICE, PUSH_NOTIFICATIONS_SERVICE_URL };
