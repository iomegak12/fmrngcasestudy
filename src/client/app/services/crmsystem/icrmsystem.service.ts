import { Observable } from "rxjs/Observable";
import { InjectionToken } from '@angular/core';
import { Customer } from "../../models/crmsystem/customer";

const CUSTOMER_SERVICE_BASE_URL_TOKEN: InjectionToken<string> =
    new InjectionToken<string>('customerServiceBaseUrl');

const CUSTOMER_SERVICE_TOKEN = new InjectionToken<ICustomerService>('customerService');

interface ICustomerService {
    getCustomers(): Observable<Customer[]>;
}

export { ICustomerService, CUSTOMER_SERVICE_BASE_URL_TOKEN, CUSTOMER_SERVICE_TOKEN };
