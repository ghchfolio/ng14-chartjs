import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SalesDataService } from './services/sales-data.service';
import { ChartComponent } from './shared/components/chart/chart.component';
import { barChartConfig, lineChartConfig, badChartConfig, donutChartConfig } from './shared/functions/chart-configs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    // e.g. 1 BAR chart props
    @ViewChild('barChart') barChart?: ChartComponent;
    barChartDataSub = new Subscription();
    barChartConfig = barChartConfig;

    // e.g. 2 LINE chart props
    @ViewChild('lineChart') lineChart?: ChartComponent;
    lineChartDataSub = new Subscription();
    lineChartConfig = lineChartConfig;

    // e.g. 3 DONUT chart props
    @ViewChild('donutChart') donutChart?: ChartComponent;
    donutChartDataSub = new Subscription();
    donutChartConfig = donutChartConfig;

    // e.g. 4 BAD chart props
    @ViewChild('badChart') badChart?: ChartComponent;
    badChartSub = new Subscription();
    badChartConfig = badChartConfig;

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

        // e.g. 3 DONUT chart sub
        this.donutChartDataSub = this.sds.donutChartData$
            .subscribe({
                next: (res: any) => {
                    if (res.sales !== undefined) {
                        this.donutChartConfig.data.labels = [...res.sales];
                        this.donutChart?.createChart(this.donutChartConfig);
                    }
                },
                error: error => this.donutChart?.createChart(error)
            });

        // e.g. 4 BAD chart sub
        this.badChartSub = this.sds.getBadData()
            .subscribe({
                next: (res: any) => {
                    if (res.sales !== undefined) {
                        this.badChartConfig.data.labels = [...res.dates];
                        this.badChart?.createChart(this.badChartConfig);
                    }
                },
                error: error => this.badChart?.createChart(error)
            });



    }

    ngOnDestroy() {
        this.barChartDataSub.unsubscribe();
        this.lineChartDataSub.unsubscribe();
        this.donutChartDataSub.unsubscribe();
        this.badChartSub.unsubscribe();
    }
}
