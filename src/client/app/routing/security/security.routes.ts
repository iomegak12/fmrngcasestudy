import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { LoginComponent } from "../../components/login/login.component";

let routeDefinitions: Route[] =
    [
        {
            path: 'login',
            component: LoginComponent
        }
    ];

let securityRouteDefinitions: ModuleWithProviders =
    RouterModule.forRoot(routeDefinitions, {
        useHash: false
    });

export { securityRouteDefinitions };
