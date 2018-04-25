import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CustomerModalViewerComponent } from "../../components/customermodalviewer/customermodalviewer.component";
import { CustomerDetailViewerComponent } from "../../components/customerdetailviewer/customerdetailviewer.component";
import { SymbolPipe } from "../../pipes/symbol/symbol.pipe";
import { NewCustomerComponent } from "../../components/newcustomer/newcustomer.component";
import { PushNotificationsModule } from "../pushnotifications/pushnotifications.module";

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        PushNotificationsModule,
        CommonModule, HttpClientModule, crmSystemRouteDefinitions
    ],
    declarations: [
        CrmSystemComponent,
        CustomerViewerComponent,
        CustomerModalViewerComponent,
        CustomerDetailViewerComponent,
        PhotoUrlPipe, WherePipe, SymbolPipe,
        SearchPanelComponent,
        NewCustomerComponent
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
