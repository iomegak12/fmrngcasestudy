import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Inject } from '@angular/core';
import { ICustomerService, CUSTOMER_SERVICE_BASE_URL_TOKEN } from "./icrmsystem.service";
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../models/crmsystem/customer';

const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';

class CustomerService implements ICustomerService {
    private serviceUrl: string = '';

    constructor(
        private httpClient: HttpClient,
        @Inject(CUSTOMER_SERVICE_BASE_URL_TOKEN)
        private customerServiceBaseUrl: string) {
        this.serviceUrl = `${this.customerServiceBaseUrl}/api/customers`;
    }

    getCustomers(): Observable<Customer[]> {
        let validation = this.httpClient && this.serviceUrl;

        if (!validation)
            throw new Error(INVALID_ARGUMENTS);

        let customers = this.httpClient.get<Customer[]>(this.serviceUrl);

        return customers;
    }

    saveCustomerRecord(customerRecord: Customer): Observable<any> {
        let validation = this.httpClient && this.serviceUrl && customerRecord;

        if (!validation)
            throw new Error(INVALID_ARGUMENTS);

        let status = this.httpClient.post<any>(this.serviceUrl, customerRecord);

        return status;
    }
}

export { CustomerService };
