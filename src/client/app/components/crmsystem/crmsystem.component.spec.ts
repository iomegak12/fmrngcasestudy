import { Observable } from "rxjs/Observable";
import { Customer } from "../../models/crmsystem/customer";
import { ICustomerService, CUSTOMER_SERVICE_TOKEN } from "../../services/crmsystem/icrmsystem.service";
import { IPushNotificationsService, PUSH_NOTIFICATIONS_SERVICE } from "../../services/pushnotifications/ipushnotifications.service";
import { TestBed, async } from "@angular/core/testing";
import { CrmSystemComponent } from "./crmsystem.component";
import { WherePipe } from "../../pipes/where/where.pipe";
import { PhotoUrlPipe } from "../../pipes/photourl/photourl.pipe";
import { SymbolPipe } from "../../pipes/symbol/symbol.pipe";
import { CommonModule } from "@angular/common";
import { CustomerViewerComponent } from "../customerviewer/customerviewer.component";
import { CustomerModalViewerComponent } from "../customermodalviewer/customermodalviewer.component";
import { CustomerDetailViewerComponent } from "../customerdetailviewer/customerdetailviewer.component";
import { FormsModule } from "@angular/forms";
import { SearchPanelComponent } from "../searchpanel/searchpanel.component";

class MockCustomerService implements ICustomerService {
    public returnValues: Customer[] = [];

    getCustomers(): Observable<Customer[]> {
        let observable = Observable.create(
            (observer: any) => {
                observer.next(this.returnValues);
                observer.complete();
            });

        return observable;
    }

    saveCustomerRecord(customerRecord: Customer): Observable<boolean> {
        throw new Error('Not Implemented!');
    }
}

class MockPushNotificationsService implements IPushNotificationsService {
    registerCallback(callback: (message: any) => void): boolean {
        return true;
    }
}

function main() {
    describe('CRM System Component Test Suite', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormsModule, CommonModule],
                providers: [
                    {
                        provide: CUSTOMER_SERVICE_TOKEN,
                        useClass: MockCustomerService
                    },
                    {
                        provide: PUSH_NOTIFICATIONS_SERVICE,
                        useClass: MockPushNotificationsService
                    }
                ],
                declarations: [
                    SearchPanelComponent,
                    CrmSystemComponent, WherePipe, PhotoUrlPipe, SymbolPipe,
                    CustomerViewerComponent, CustomerModalViewerComponent,
                    CustomerDetailViewerComponent]
            });
        });

        it('Valid Test case for CRM System Component', async(() => {
            TestBed.compileComponents()
                .then(() => {
                    let component = TestBed.createComponent(CrmSystemComponent);
                    let instance = component.debugElement.componentInstance;
                    let customerService = <MockCustomerService>component.debugElement.injector.get(CUSTOMER_SERVICE_TOKEN);

                    spyOn(customerService, 'getCustomers').and.callThrough();

                    let mockCustomers = [
                        new Customer(11, 'Mock Customer 11', 'Bangalore', 12000, true, 'info@email.com', '080-39483433', 'Simple'),
                        new Customer(12, 'Mock Customer 12', 'Bangalore', 12000, true, 'info@email.com', '080-39483433', 'Simple'),
                        new Customer(13, 'Mock Customer 13', 'Bangalore', 12000, true, 'info@email.com', '080-39483433', 'Simple'),
                        new Customer(14, 'Mock Customer 14', 'Bangalore', 12000, true, 'info@email.com', '080-39483433', 'Simple'),
                        new Customer(15, 'Mock Customer 15', 'Bangalore', 12000, true, 'info@email.com', '080-39483433', 'Simple')
                    ];

                    customerService.returnValues = mockCustomers;
                    component.detectChanges();

                    expect(instance.customers).toBeDefined();
                    expect(instance.customers.length).toBe(5);
                    expect(instance.customers[0].id).toBe(11);
                    expect(instance.customers[1].name).toBe('Mock Customer 12');
                    expect(customerService.getCustomers).toHaveBeenCalledTimes(1);
                });
        }));
    });
}

export { main };