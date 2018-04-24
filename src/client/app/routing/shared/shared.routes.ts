import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { AboutUsComponent } from '../../components/aboutus/aboutus.component';
import { ContactUsComponent } from '../../components/contactus/contactus.component';

const routeDefinitions: Route[] =
    [
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'about-us',
            component: AboutUsComponent
        },
        {
            path: 'contact-us',
            component: ContactUsComponent
        },
        {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
        }
    ];

const sharedRouteDefinitions: ModuleWithProviders =
    RouterModule.forRoot(routeDefinitions, { useHash: false });

export { sharedRouteDefinitions };