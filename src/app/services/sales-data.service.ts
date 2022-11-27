import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

    // e.g. 4 LINE chart data
    private donutChartDataSource: any = {};
    private donutChartDataSourceSubj = new BehaviorSubject<any>(this.donutChartDataSource);
    donutChartData$ = this.donutChartDataSourceSubj.asObservable();

    private stackedChartDataSource: any = {};
    private stackedChartDataSourceSubj = new BehaviorSubject<any>(this.stackedChartDataSource);
    stackedChartData$ = this.stackedChartDataSourceSubj.asObservable();

    constructor(private http: HttpClient) {
        this.getFakeData();
    }

    private getFakeData() {
        // e.g.1 send BAR chart data after 1 sec.
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
        }, 1000);

        // e.g.2 send HORIZ. STACKED chart data after 2 sec.
        setTimeout(() => {
            this.stackedChartDataSourceSubj.next({
                sales: [
                    '467', '576', '572', '79',
                    '92', '574', '573', '576'
                ],
                dates: [
                    '2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
                    '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',
                ]
            });
        }, 2000);

        // e.g.3 send LINE chart data after 2 secs.
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
        }, 3000);

        // e.g.4 send BAR chart data after 3 secs.
        setTimeout(() => {
            this.donutChartDataSourceSubj.next({
                sales: [12, 77, 29, 99, 4],
            });
        }, 4000);
    }

    // e.g. 5 bad chart data
    getBadData() {
        return this.http
            .get('https://jsonplaceholder.typicode.com/bad-url-example/1')
            .pipe(
                catchError(error => {
                    return throwError(() => {
                        switch (error.status) {
                            case 404: {
                                return { status: error.status, message: 'Chart Data Unavailable' };
                                // return `Not Found: ${error.status}`;
                            }
                            case 403: {
                                return { status: error.status, message: 'Access Denied' };
                                // return `Access Denied: ${error.message}`;
                            }
                            case 500:
                                return { status: error.status, message: 'Internal Server Error' }; {
                                    // return `Internal Server Error: ${error.message}`;
                                }
                            default: {
                                return { status: error.status, message: 'Unknown Server Error' };
                                // return `Unknown Server Error: ${error.message}`;
                            }
                        }
                    });
                })
            )
    }
}
