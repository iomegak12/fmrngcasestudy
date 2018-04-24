import { Customer } from "../../models/crmsystem/customer";
import { Input, Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'customerviewer.component.html',
    styleUrls: ['customerviewer.component.css'],
    selector: 'customerviewer-component'
})
class CustomerViewerComponent {
    @Input()
    public customerInfo: Customer;

    constructor() {
        console.log('Customer Viewer Initialized1');
    }
}

export { CustomerViewerComponent };
