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
    config: any = {};

    constructor(private elementRef: ElementRef) { }

    createChart(config: any) {
        const canvasEl = this.elementRef.nativeElement.querySelector(`#${this.id}`);

        this.config = { ...config };
        if (this.config.data !== undefined) this.chart = new Chart(canvasEl, this.config);
    }

}
