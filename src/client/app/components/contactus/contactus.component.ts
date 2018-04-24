import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'contactus-component',
    templateUrl: 'contactus.component.html',
    styleUrls: ['contactus.component.css']
})
class ContactUsComponent {
    constructor() {
        console.log('ContactUs Component Initialized!');
    }
}

export { ContactUsComponent };
