import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CrmSystemComponent } from "../../components/crmsystem/crmsystem.component";
import { CUSTOMER_SERVICE_TOKEN, CUSTOMER_SERVICE_BASE_URL_TOKEN } from "../../services/crmsystem/icrmsystem.service";
import { CustomerService } from "../../services/crmsystem/crmsystem.service";
import { crmSystemRouteDefinitions } from "../../routing/crmsystem/crmsystem.routes";
import { CustomerViewerComponent } from "../../components/customerviewer/customerviewer.component";
import { PhotoUrlPipe } from "../../pipes/photourl/photourl.pipe";
import { SearchPanelComponent } from "../../components/searchpanel/searchpanel.component";
import { WherePipe } from "../../pipes/where/where.pipe";

@NgModule({
    imports: [
        FormsModule,
        CommonModule, HttpClientModule, crmSystemRouteDefinitions
    ],
    declarations: [
        CrmSystemComponent,
        CustomerViewerComponent,
        PhotoUrlPipe, WherePipe,
        SearchPanelComponent
    ],
    providers: [
        {
            provide: CUSTOMER_SERVICE_TOKEN,
            useClass: CustomerService
        },
        {
            provide: CUSTOMER_SERVICE_BASE_URL_TOKEN,
            useFactory: () => {
                let buildType = String('<%= BUILD_TYPE %>');

                if (buildType === 'prod') {
                    return String('<%= PROD_CUSTOMER_SERVICE_BASE_URL %>');
                }

                return String('<%= DEV_CUSTOMER_SERVICE_BASE_URL %>');
            }
        }
    ]
})
class CrmSystemModule {
    constructor() {
        console.log('CRM System Module Initialized!');
    }
}

export { CrmSystemModule };
