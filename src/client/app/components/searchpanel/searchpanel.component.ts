import { Input, Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'searchpanel.component.html',
    styleUrls: ['searchpanel.component.html'],
    selector: 'searchpanel-component'
})
class SearchPanelComponent {
    @Input()
    public searchString: string = '';

    constructor() {
        console.log('Search Panel Component Initialized!');
    }
}

export { SearchPanelComponent };
