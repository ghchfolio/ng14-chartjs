import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SalesDataService } from './services/sales-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    // e.g. 1 BAR chart w sales data1
    salesData1$ = this.sds.salesData1$;
    salesData1Sub = new Subscription();
    barChartIsReady = false;
    barChartID = 'barChart';
    barChartAriaLabel = 'A bar chart';
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
                    backgroundColor: this.createDiagonalPattern('red', 'pink'),
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
    }

    // e.g. 2 LINE chart w sales data2
    salesData2$ = this.sds.salesData1$;
    salesData2Sub = new Subscription();
    lineChartIsReady = false;
    lineChartID = 'lineChart';
    lineChartAriaLabel = 'A line chart';
    lineChartConfig = {
        type: 'line',
        data: {
            labels: [
                '2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
                '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',
            ],
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
    }

    constructor(private sds: SalesDataService) { }

    ngAfterViewInit() {
        // e.g. 1 BAR chart w sales data1
        this.salesData1Sub = this.sds.salesData1$
            .subscribe((res: any) => {
                if (res.sales !== undefined) {
                    this.barChartConfig.data.labels = [...res.dates]
                    this.barChartIsReady = true;
                }
            });

        // e.g. 2 LINE chart w sales data2
        this.salesData2Sub = this.sds.salesData2$
            .subscribe((res: any) => {
                if (res.sales !== undefined) {
                    this.lineChartConfig.data.labels = [...res.dates]
                    this.lineChartIsReady = true;
                }
            });
    }

    // takes a fgColor and bgColor, creates stripes
    // and applies it to the bar
    private createDiagonalPattern(fgColor = 'gray', bgColor = 'darkgray') {
        const pattern = document.createElement('canvas');
        pattern.width = 10;
        pattern.height = 10;

        let c = pattern.getContext('2d');

        if (c !== null) {
            c.fillStyle = bgColor;
            c.fillRect(0, 0, pattern.width, pattern.height);
            c.strokeStyle = fgColor;
            c.beginPath();
            c.moveTo(2, 0);
            c.lineTo(10, 8);
            c.stroke();
            c.beginPath();
            c.moveTo(0, 8);
            c.lineTo(2, 10);
            c.stroke();
            return c.createPattern(pattern, 'repeat');
        }

        return 'lightblue';
    }

    ngOnDestroy() {
        this.salesData1Sub.unsubscribe();
        this.salesData2Sub.unsubscribe();
    }
}
