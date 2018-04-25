import { Component, Inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { customerFormModel } from "./newcustomer.model";
import { ICustomerService, CUSTOMER_SERVICE_TOKEN } from "../../services/crmsystem/icrmsystem.service";
import { Router } from "@angular/router";

const BUSINESS_VALIDATION_FAILED = 'Customer Business Validation Failed!';
const REDIRECT_URI_AFTER_SAVE = 'crm-system';

@Component({
    moduleId: module.id,
    templateUrl: 'newcustomer.component.html',
    styleUrls: ['newcustomer.component.css'],
    selector: 'newcustomer-component'
})
class NewCustomerComponent {
    public customerFormModel: FormGroup;
    public saveStatus: boolean = false;
    public isSaving: boolean = false;
    public errorMessage: string = '';

    constructor(
        private routerService: Router,
        @Inject(CUSTOMER_SERVICE_TOKEN) private customerService: ICustomerService) {
        this.customerFormModel = customerFormModel;
        console.log('New Customer Component Initialized!');
    }

    handleSave() {
        let validation = this.customerFormModel &&
            this.customerFormModel.valid && this.customerService;

        if (!validation)
            throw new Error(BUSINESS_VALIDATION_FAILED);

        this.isSaving = true;
        this.customerService
            .saveCustomerRecord(this.customerFormModel.value)
            .subscribe(
                result => {
                    this.saveStatus = result && result.status;

                    if (this.routerService) {
                        this.routerService.navigate([REDIRECT_URI_AFTER_SAVE]);
                    }
                },
                error => this.errorMessage = `Error Occurred, Details : ${JSON.stringify(error)}`,
                () => this.isSaving = false);
    }
}

export { NewCustomerComponent };
