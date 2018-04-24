import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { CrmSystemComponent } from "../../components/crmsystem/crmsystem.component";

const routeDefinitions: Route[] =
    [
        {
            path: 'crm-system',
            component: CrmSystemComponent
        }
    ];

const crmSystemRouteDefinitions: ModuleWithProviders =
    RouterModule.forRoot(routeDefinitions, { useHash: false });

export { crmSystemRouteDefinitions };
