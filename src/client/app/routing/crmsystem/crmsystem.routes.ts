import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { CrmSystemComponent } from "../../components/crmsystem/crmsystem.component";
import { NewCustomerComponent } from "../../components/newcustomer/newcustomer.component";

const routeDefinitions: Route[] =
    [
        {
            path: 'crm-system',
            component: CrmSystemComponent
        },
        {
            path: 'new-customer',
            component: NewCustomerComponent
        }
    ];

const crmSystemRouteDefinitions: ModuleWithProviders =
    RouterModule.forRoot(routeDefinitions, { useHash: false });

export { crmSystemRouteDefinitions };
