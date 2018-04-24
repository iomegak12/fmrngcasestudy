import { NgModule } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FollowmeComponent } from '../../components/followme/followme.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ContactInfoComponent } from '../../components/contactinfo/contactinfo.component';
import { FooterSummaryComponent } from '../../components/footersummary/footersummary.component';
import { HomeComponent } from '../../components/home/home.component';
import { AboutUsComponent } from '../../components/aboutus/aboutus.component';
import { ContactUsComponent } from '../../components/contactus/contactus.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { ReasonsComponent } from '../../components/reasons/reasons.component';
import { SocialComponent } from '../../components/social/social.component';
import { VacanciesComponent } from '../../components/vacancies/vacancies.component';
import { ContactMapComponent } from '../../components/contactmap/contactmap.component';
import { sharedRouteDefinitions } from '../../routing/shared/shared.routes';
import { ContactAddressComponent } from '../../components/contactaddress/contactaddress.component';

@NgModule({
    imports: [sharedRouteDefinitions],
    declarations: [
        HeaderComponent, NavigationComponent,
        FooterComponent, FollowmeComponent,
        LayoutComponent, ContactInfoComponent,
        FooterSummaryComponent, HomeComponent,
        AboutUsComponent, ContactUsComponent, ContactAddressComponent,
        FaqComponent, ReasonsComponent, SocialComponent, VacanciesComponent,
        ContactInfoComponent, ContactMapComponent
    ],
    exports: [LayoutComponent]
})
class SharedModule {
    constructor() {
        console.log('Shared Module Initialized!');
    }
}

export { SharedModule };
