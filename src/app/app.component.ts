import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SalesDataService } from './services/sales-data.service';
import { ChartComponent } from './shared/components/chart/chart.component';
import { CreateDiagonalPattern } from './shared/functions/chartjs-helpers';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    CreateDiagonalPattern = CreateDiagonalPattern;

    // e.g. 1 BAR chart props
    @ViewChild('barChart') barChart?: ChartComponent;
    barChartDataSub = new Subscription();
    barChartId = 'barChart';
    barChartAriaLabel = 'A Sales/Profit comparison chart';
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
                    borderRadius: 10,
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            // resizeDelay: 250
        },
        errorMessage: ''
    };

    // e.g. 2 LINE chart props
    @ViewChild('lineChart') lineChart?: ChartComponent;
    lineChartDataSub = new Subscription();
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

    // e.g. 3 BAD chart props
    @ViewChild('badDataChart') badDataChart?: ChartComponent;
    badDataChartSub = new Subscription();
    badDataChartId = 'badDataChart';
    badDataChartAriaLabel = 'A bad data chart';
    badDataChartConfig: any = {
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
                    borderRadius: 10,
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            // resizeDelay: 250
        },
        errorMessage: ''
    };

    constructor(private sds: SalesDataService) { }

    ngAfterViewInit() {
        // e.g. 1 BAR chart sub
        this.barChartDataSub = this.sds.barChartData$
            .subscribe({
                next: (res: any) => {
                    if (res.sales !== undefined) {
                        this.barChartConfig.data.labels = [...res.dates];
                        this.barChart?.createChart(this.barChartConfig);
                    }
                },
                error: error => this.barChart?.createChart(error)
            });

        // e.g. 2 LINE chart sub
        this.lineChartDataSub = this.sds.lineChartData$
            .subscribe({
                next: (res: any) => {
                    if (res.sales !== undefined) {
                        this.lineChartConfig.data.labels = [...res.dates];
                        this.lineChart?.createChart(this.lineChartConfig);
                    }
                },
                error: error => this.lineChart?.createChart(error)
            });

        // e.g. 3 BAD chart sub
        this.badDataChartSub = this.sds.getBadData()
            .subscribe({
                next: (res: any) => {
                    if (res.sales !== undefined) {
                        this.badDataChartConfig.data.labels = [...res.dates];
                        this.badDataChart?.createChart(this.badDataChartConfig);
                    }
                },
                error: error => this.badDataChart?.createChart(error)
            });
    }

    ngOnDestroy() {
        this.barChartDataSub.unsubscribe();
        this.lineChartDataSub.unsubscribe();
        this.badDataChartSub.unsubscribe();
    }
}
