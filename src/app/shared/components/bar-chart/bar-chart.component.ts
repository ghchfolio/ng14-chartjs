import { AfterViewInit, Component, Input } from '@angular/core';
import { Chart } from 'node_modules/chart.js/auto';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements AfterViewInit {

    @Input() id!: string;
    @Input() ariaLabel!: string;
    @Input() chartConfig!: any;

    chart: any;

    constructor() { }

    ngAfterViewInit() {
        this.createChart();
    }

    async createChart() {
        this.chart = await new Chart(this.id, this.chartConfig);
    }
}
// https://www.freecodecamp.org/news/how-to-make-bar-and-line-charts-using-chartjs-in-angular/
// https://www.chartjs.org/docs/latest/
// https://www.chartjs.org/docs/latest/configuration/responsive.html
// https://stackoverflow.com/questions/28569667/fill-chart-js-bar-chart-with-diagonal-stripes-or-other-patterns