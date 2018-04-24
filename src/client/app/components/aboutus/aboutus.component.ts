import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'aboutus-component',
    templateUrl: 'aboutus.component.html',
    styleUrls: ['aboutus.component.css']
})
class AboutUsComponent {
    constructor() {
        console.log('AboutUs Component Initialized!');
    }
}

export { AboutUsComponent };
