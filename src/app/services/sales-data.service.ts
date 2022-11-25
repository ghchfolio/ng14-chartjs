import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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

    constructor(private http: HttpClient) {
        this.getFakeData();
    }

    private getFakeData() {
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

    getBadData() {
        return this.http
            .get('https://jsonplaceholder.typicode.com/bad-url-example/1')
            .pipe(
                catchError(error => {
                    return throwError(() => {
                        switch (error.status) {
                            case 404: {
                                return { status: error.status, message: 'Data Not Found' };
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
