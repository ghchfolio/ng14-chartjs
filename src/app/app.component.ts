import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SalesDataService } from './services/sales-data.service';
import { ChartComponent } from './shared/components/chart/chart.component';
import { barChartConfig, lineChartConfig, badDataChartConfig } from './shared/functions/chart-configs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    // e.g. 1 BAR chart props
    @ViewChild('barChart') barChart?: ChartComponent;
    barChartDataSub = new Subscription();
    barChartId = 'barChart';
    barChartAriaLabel = 'A Sales/Profit comparison chart';
    barChartConfig = barChartConfig;

    // e.g. 2 LINE chart props
    @ViewChild('lineChart') lineChart?: ChartComponent;
    lineChartDataSub = new Subscription();
    lineChartConfig = lineChartConfig;

    // e.g. 3 BAD chart props
    @ViewChild('badDataChart') badDataChart?: ChartComponent;
    badDataChartSub = new Subscription();
    badDataChartId = 'badDataChart';
    badDataChartAriaLabel = 'A bad data chart';
    badDataChartConfig = badDataChartConfig;

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
