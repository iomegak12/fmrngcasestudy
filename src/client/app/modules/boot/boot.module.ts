import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BootComponent } from "../../components/boot/boot.component";
import { SharedModule } from "../shared/shared.module";
import { CrmSystemModule } from "../crmsystem/crmsystem.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { JsonHeadersHttpInterceptor } from "../../extensibility/jsonheadershttpinterceptor";

@NgModule({
    imports: [BrowserModule, HttpClientModule, SharedModule, CrmSystemModule],
    declarations: [BootComponent],
    bootstrap: [BootComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JsonHeadersHttpInterceptor,
            multi: true
        }
    ]
})
class BootModule {
    constructor() {
        console.log('Boot Module Initialized!');
    }
}

export { BootModule };
