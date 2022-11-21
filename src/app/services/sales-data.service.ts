import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SalesDataService {

    // e.g. 1 BAR chart data
    private barChartDataSource: any = {};
    private barChartDataSourceSubj = new BehaviorSubject<any>(this.barChartDataSource);
    barChartData$ = this.barChartDataSourceSubj.asObservable();

    // e.g. 2 LINE chart data
    private lineChartDataSource: any = {};
    private lineChartDataSourceSubj = new BehaviorSubject<any>(this.lineChartDataSource);
    lineChartData$ = this.lineChartDataSourceSubj.asObservable();

    constructor() {
        this.fakeResponse();
    }

    private fakeResponse() {
        // e.g.1 send BAR chart data after 3 secs.
        setTimeout(() => {
            this.barChartDataSourceSubj.next({
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

        // e.g.2 send LINE chart data after 6 secs.
        setTimeout(() => {
            this.lineChartDataSourceSubj.next({
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
