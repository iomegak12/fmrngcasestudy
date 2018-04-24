import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'followme-component',
    templateUrl: 'followme.component.html',
    styleUrls: ['followme.component.css']
})
class FollowmeComponent {
    constructor() {
        console.log('Followme Component Initialized!');
    }
}

export { FollowmeComponent };
