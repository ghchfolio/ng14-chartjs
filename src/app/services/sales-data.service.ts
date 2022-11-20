import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SalesDataService {

    // e.g. 1 BAR chart w sales data1
    private salesData1DataSource: any = {};
    private salesData1DataSourceSubj = new BehaviorSubject<any>(this.salesData1DataSource);
    salesData1$ = this.salesData1DataSourceSubj.asObservable();

    // e.g. 2 LINE chart w sales data2
    private salesData2DataSource: any = {};
    private salesData2DataSourceSubj = new BehaviorSubject<any>(this.salesData2DataSource);
    salesData2$ = this.salesData2DataSourceSubj.asObservable();

    constructor() {
        this.fakeResponse();
    }

    fakeResponse() {
        // e.g.1 send data after 3 secs.
        setTimeout(() => {
            this.salesData1DataSourceSubj.next({
                sales: [
                    '467', '576', '572', '79',
                    '92', '574', '573', '576'
                ],
                dates: [
                    '2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
                    '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',
                ]
            });
        }, 3000);

        // e.g.2 send data after 6 secs.
        setTimeout(() => {
            this.salesData2DataSourceSubj.next({
                sales: [
                    '30', '50', '400', '791',
                    '192', '57', '3', '76'
                ],
                dates: [
                    '2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
                    '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',
                ]
            });
        }, 6000);
    }
}
