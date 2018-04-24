import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'contactinfo-component',
    templateUrl: 'contactinfo.component.html',
    styleUrls: ['contactinfo.component.css']
})
class ContactInfoComponent {
    constructor() {
        console.log('ContactInfo Component Initialized!');
    }
}

export { ContactInfoComponent };
