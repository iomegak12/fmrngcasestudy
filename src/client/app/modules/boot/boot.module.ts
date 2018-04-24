import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BootComponent } from "../../components/boot/boot.component";
import { SharedModule } from "../shared/shared.module";
import { CrmSystemModule } from "../crmsystem/crmsystem.module";

@NgModule({
    imports: [BrowserModule, SharedModule, CrmSystemModule],
    declarations: [BootComponent],
    bootstrap: [BootComponent]
})
class BootModule {
    constructor() {
        console.log('Boot Module Initialized!');
    }
}

export { BootModule };
