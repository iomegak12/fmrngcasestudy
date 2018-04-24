import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'contactmap-component',
    templateUrl: 'contactmap.component.html',
    styleUrls: ['contactmap.component.css']
})
class ContactMapComponent {
    constructor() {
        console.log('ContactMap Component Initialized!');
    }
}

export { ContactMapComponent };
