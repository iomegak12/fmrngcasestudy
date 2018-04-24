import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Inject } from '@angular/core';
import { ICustomerService, CUSTOMER_SERVICE_BASE_URL_TOKEN } from "./icrmsystem.service";
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../models/crmsystem/customer';

const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';
const JSON_CONTENT_TYPE = 'application/json';

class CustomerService implements ICustomerService {
    constructor(
        private httpClient: HttpClient,
        @Inject(CUSTOMER_SERVICE_BASE_URL_TOKEN)
        private customerServiceBaseUrl: string) { }

    getCustomers(): Observable<Customer[]> {
        let validation = this.httpClient && this.customerServiceBaseUrl;

        if (!validation)
            throw new Error(INVALID_ARGUMENTS);

        let serviceUrl = `${this.customerServiceBaseUrl}/api/customers`;
        let customers = this.httpClient.get<Customer[]>(serviceUrl, {
            headers: new HttpHeaders({
                'Accept': JSON_CONTENT_TYPE,
                'Content-Type': JSON_CONTENT_TYPE
            })
        });

        return customers;
    }
}

export { CustomerService };
