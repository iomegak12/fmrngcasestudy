import { ICustomerService, CUSTOMER_SERVICE_TOKEN } from "../../services/crmsystem/icrmsystem.service";
import { InjectionToken, Inject, OnInit, Component } from "@angular/core";
import { Customer } from "../../models/crmsystem/customer";

const INVALID_CUSTOMER_SERVICE = 'Invalid Customer Service Specified!';

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
        private customerService: ICustomerService) {
    }

    ngOnInit() {
        if (!this.customerService) {
            throw new Error(INVALID_CUSTOMER_SERVICE);
        }

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
