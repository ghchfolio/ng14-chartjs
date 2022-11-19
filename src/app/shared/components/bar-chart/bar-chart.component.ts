import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js/auto';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, AfterViewInit {

    @Input() id!: string;
    @Input() ariaLabel!: string;
    @Input() chartConfig!: any;

    chart: any;

    constructor() { }

    ngOnInit(): void { }

    ngAfterViewInit() {
        this.createChart();
    }

    async createChart() {
        this.chart = await new Chart(this.id, this.chartConfig);
    }
}
// https://www.freecodecamp.org/news/how-to-make-bar-and-line-charts-using-chartjs-in-angular/
// https://www.chartjs.org/docs/latest/