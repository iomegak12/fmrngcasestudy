import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'boot-component',
    templateUrl: 'boot.component.html',
    styleUrls: ['boot.component.css']
})
class BootComponent {
    public title: string = 'Boot Component Completed!';

    constructor() {
        console.log('Boot Component Initialized!');
    }
}

export { BootComponent };
