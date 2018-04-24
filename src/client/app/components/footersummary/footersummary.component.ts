import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'footersummary-component',
    templateUrl: 'footersummary.component.html',
    styleUrls: ['footersummary.component.css']
})
class FooterSummaryComponent {
    constructor() {
        console.log('Footersummary Component Initialized!');
    }
}

export { FooterSummaryComponent };
