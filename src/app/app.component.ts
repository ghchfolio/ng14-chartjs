import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SalesDataService } from './services/sales-data.service';
import { ChartComponent } from './shared/components/chart/chart.component';
import { barChartConfig, stackedChartConfig, lineChartConfig, donutChartConfig, badChartConfig } from './shared/functions/chart-configs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    // e.g. 1 BAR chart props
    @ViewChild('barChart') barChart?: ChartComponent;
    barChartDataSub = new Subscription();
    barChartConfig = barChartConfig;

    // e.g. 2 HORIZ. STACKED chart props
    @ViewChild('stackedChart') stackedChart?: ChartComponent;
    stackedChartDataSub = new Subscription();
    stackedChartConfig = stackedChartConfig;

    // e.g. 3 LINE chart props
    @ViewChild('lineChart') lineChart?: ChartComponent;
    lineChartDataSub = new Subscription();
    lineChartConfig = lineChartConfig;

    // e.g. 4 DONUT chart props
    @ViewChild('donutChart') donutChart?: ChartComponent;
    donutChartDataSub = new Subscription();
    donutChartConfig = donutChartConfig;

    // e.g. 5 BAD chart props
    @ViewChild('badChart') badChart?: ChartComponent;
    badChartSub = new Subscription();
    badChartConfig = badChartConfig;

    constructor(private sds: SalesDataService) { }

    ngOnInit() {
        // e.g. 1 BAR chart sub
        this.barChartDataSub = this.sds.barChartData$
            .subscribe({
                next: (res: any) => {
                    if (res.sales !== undefined) {
                        this.barChartConfig.data.labels = [...res.dates];
                        this.barChart?.createChart(this.barChartConfig);
                    }
                },
                error: error => this.barChart?.showError(error)
            });

        // e.g. 2 HORIZ. STACKED chart sub
        this.stackedChartDataSub = this.sds.stackedChartData$
            .subscribe({
                next: (res: any) => {
                    if (res.sales !== undefined) {
                        this.stackedChartConfig.data.labels = [...res.sales];
                        this.stackedChart?.createChart(this.stackedChartConfig);
                    }
                },
                error: error => this.stackedChart?.showError(error)
            });

        // e.g. 3 LINE chart sub
        this.lineChartDataSub = this.sds.lineChartData$
            .subscribe({
                next: (res: any) => {
                    if (res.sales !== undefined) {
                        this.lineChartConfig.data.labels = [...res.dates];
                        this.lineChart?.createChart(this.lineChartConfig);
                    }
                },
                error: error => this.lineChart?.showError(error)
            });

        // e.g. 4 DONUT chart sub
        this.donutChartDataSub = this.sds.donutChartData$
            .subscribe({
                next: (res: any) => {
                    if (res.sales !== undefined) {
                        this.donutChartConfig.data.labels = [...res.sales];
                        this.donutChart?.createChart(this.donutChartConfig);
                    }
                },
                error: error => this.donutChart?.showError(error)
            });

        // e.g. 5 BAD chart sub
        setTimeout(() => this.getBadData(), 5000);
    }

    private getBadData() {
        this.badChartSub = this.sds.getBadData()
            .subscribe({
                next: (res: any) => {
                    if (res.sales !== undefined) {
                        this.badChartConfig.data.labels = [...res.dates];
                        this.badChart?.createChart(this.badChartConfig);
                    }
                },
                error: error => this.badChart?.showError(error)
            });
    }

    goToPage(chartElement: { index: number; }) {
        let url: string | undefined;

        // TODO use if by chartType ..., and move switch statements to ext file
        switch (chartElement.index) {
            case 7:
                url = 'https://www.microsoft.com';
                break;
            case 6:
                url = 'https://www.w3schools.com';
                break;
            case 5:
                url = 'https://angular.io';
                break;
            case 4:
                url = 'https://www.youtube.com';
                break;
            case 3:
                url = 'https://www.google.com';
                break;
            case 2:
                url = 'https://github.com';
                break;
            case 1:
                url = 'https://www.istation.com';
                break;
            case 0:
                url = 'https://www.chartjs.org';
                break;
            default:
                url = 'https://www.chartjs.org';
                break;
        }

        if (url !== undefined) window.open(url, '_blank', '');
    }

    ngOnDestroy() {
        this.barChartDataSub.unsubscribe();
        this.stackedChartDataSub.unsubscribe();
        this.lineChartDataSub.unsubscribe();
        this.donutChartDataSub.unsubscribe();
        this.badChartSub.unsubscribe();
    }
}