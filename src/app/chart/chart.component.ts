import { Component, ElementRef, Input } from '@angular/core';
import { Chart } from 'node_modules/chart.js/auto';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

    @Input() id: any;
    @Input() ariaLabel: any;

    chart: any = {};

    constructor(private elementRef: ElementRef) { }

    createChart(chartConfig: any) {
        const canvasEl = this.elementRef.nativeElement.querySelector(`#${this.id}`);
        this.chart = new Chart(canvasEl, chartConfig);
    }

}
