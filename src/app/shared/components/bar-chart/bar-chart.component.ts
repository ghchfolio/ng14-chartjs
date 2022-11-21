import { Component, ElementRef, Input } from '@angular/core';
import { Chart } from 'node_modules/chart.js/auto';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

    @Input() id: any;
    @Input() ariaLabel: any;

    chart: any = {};

    constructor(private elementRef: ElementRef) { }

    createChart(chartObj: any) {
        const canvasEl = this.elementRef.nativeElement.querySelector(`#${this.id}`);
        this.chart = new Chart(canvasEl, chartObj.config);
    }

}
