import { ICustomerService, CUSTOMER_SERVICE_TOKEN } from "../../services/crmsystem/icrmsystem.service";
import { InjectionToken, Inject, OnInit, Component } from "@angular/core";
import { Customer } from "../../models/crmsystem/customer";
import { IPushNotificationsService, PUSH_NOTIFICATIONS_SERVICE } from "../../services/pushnotifications/ipushnotifications.service";

const INVALID_SERVICE_SPECIFICATIONS = 'Invalid Dependency Service Specifications Provided!';

@Component({
    moduleId: module.id,
    templateUrl: 'crmsystem.component.html',
    styleUrls: ['crmsystem.component.css'],
    selector: 'crmsystem-component'
})
class CrmSystemComponent implements OnInit {
    public customers: Customer[] = [];
    public isLoading: boolean = false;
    public errorMessage: string = '';

    constructor(
        @Inject(CUSTOMER_SERVICE_TOKEN)
        private customerService: ICustomerService,
        @Inject(PUSH_NOTIFICATIONS_SERVICE)
        private pushNotificationsService: IPushNotificationsService) {
        let validation = this.customerService && this.pushNotificationsService;

        if (!validation)
            throw new Error(INVALID_SERVICE_SPECIFICATIONS);
    }

    ngOnInit() {
        this.pushNotificationsService.registerCallback(
            (notificationMessage: any) => {
                if (notificationMessage) {
                    let newCustomerRecord = new Customer(
                        notificationMessage.id,
                        notificationMessage.name, notificationMessage.address,
                        notificationMessage.credit, notificationMessage.status,
                        notificationMessage.email, notificationMessage.phone,
                        notificationMessage.remarks);

                    if (this.customers) {
                        this.customers = [... this.customers, newCustomerRecord];
                    }
                }
            });

        this.isLoading = true;

        this.customerService
            .getCustomers()
            .subscribe(
                data => this.customers = data,
                error => this.errorMessage = `Error Occurred, Details : ${JSON.stringify(error)}`,
                () => this.isLoading = false);
    }
}

export { CrmSystemComponent }
