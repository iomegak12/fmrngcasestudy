import { Input, Component } from "@angular/core";
import { Customer } from "../../models/crmsystem/customer";

@Component({
    moduleId: module.id,
    templateUrl: 'customerdetailviewer.component.html',
    styleUrls: ['customerdetailviewer.component.css'],
    selector: 'customerdetailviewer-component'
})
class CustomerDetailViewerComponent {
    @Input()
    public customerDetail: Customer;

    constructor() {
        console.log('Customer Detail Viewer Initialized!');
    }
}

export { CustomerDetailViewerComponent };
