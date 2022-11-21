import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SalesDataService } from './services/sales-data.service';
import { BarChartComponent } from './shared/components/bar-chart/bar-chart.component';
import { CreateDiagonalPattern } from './shared/functions/chart-helpers';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    CreateDiagonalPattern = CreateDiagonalPattern;

    // e.g. 1 BAR chart w sales data1
    @ViewChild('barChart') barChart?: BarChartComponent;
    barChartData$ = this.sds.barChartData$;
    barChartDataSub = new Subscription();
    barChartId = 'barChart';
    barChartAriaLabel = 'A BAR Chart';
    barChartObj: any = {};
    barChartConfig: any = {
        type: 'bar',
        data: {
            labels: [],
            datasets: [
                {
                    label: "Sales",
                    data: [
                        '467', '576', '572', '79',
                        '92', '574', '573', '576'
                    ],
                    backgroundColor: this.CreateDiagonalPattern('red', 'pink'),
                    borderWidth: 2,
                    borderColor: 'red'
                },
                {
                    label: "Profit",
                    data: [
                        '542', '542', '536', '327',
                        '17', '0.00', '538', '541'
                    ],
                    backgroundColor: 'limegreen',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderSkipped: false,
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            // resizeDelay: 250
        }
    };

    // e.g. 2 LINE chart w sales data2
    @ViewChild('lineChart') lineChart?: BarChartComponent;
    lineChartData$ = this.sds.barChartData$;
    lineChartDataSub = new Subscription();
    lineChartId = 'lineChart';
    lineChartAriaLabel = 'A LINE Chart';
    lineChartObj: any = {};
    lineChartConfig: any = {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: "Sales",
                    data: [
                        '30', '50', '400', '791',
                        '192', '57', '3', '76'
                    ],
                    backgroundColor: 'yellow'
                },
                {
                    label: "Profit",
                    data: [
                        '54', '52', '536', '37',
                        '17', '0.00', '58', '41'
                    ],
                    backgroundColor: 'red'
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            resizeDelay: 125
        }
    };

    constructor(private sds: SalesDataService) { }

    ngAfterViewInit() {
        // e.g. 1 BAR chart w sales data1
        this.barChartDataSub = this.sds.barChartData$
            .subscribe((res: any) => {
                if (res.sales !== undefined) {
                    this.barChartConfig.data.labels = [...res.dates];
                    this.barChartObj.config = { ...this.barChartConfig };
                    this.barChart?.createChart(this.barChartObj)
                }
            });

        // e.g. 2 LINE chart w sales data2
        this.lineChartDataSub = this.sds.lineChartData$
            .subscribe((res: any) => {
                if (res.sales !== undefined) {
                    this.lineChartConfig.data.labels = [...res.dates];
                    this.lineChartObj.config = { ...this.lineChartConfig };
                    this.lineChart?.createChart(this.lineChartObj)
                }
            });
    }

    ngOnDestroy() {
        this.barChartDataSub.unsubscribe();
        this.lineChartDataSub.unsubscribe();
    }
}
