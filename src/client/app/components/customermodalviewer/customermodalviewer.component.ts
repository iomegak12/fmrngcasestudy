import { Input, Component } from "@angular/core";
import { Customer } from "../../models/crmsystem/customer";

@Component({
    moduleId: module.id,
    templateUrl: 'customermodalviewer.component.html',
    styleUrls: ['customermodalviewer.component.css'],
    selector: 'customermodalviewer-component'
})
class CustomerModalViewerComponent {
    @Input()
    public customerModel: Customer;

    constructor() {
        console.log('Customer Modal Viewer Initialized!');
    }
}

export { CustomerModalViewerComponent };
