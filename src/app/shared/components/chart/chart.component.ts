import { Component, ElementRef, Input } from '@angular/core';
import { Chart } from 'node_modules/chart.js/auto';
import { fromEvent, Subscription } from 'rxjs';

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
    error: any = {};

    onClickSub: Subscription = new Subscription();

    constructor(private elementRef: ElementRef) { }

    createChart(config: any) {
        this.config = config;
        const canvasEl = this.elementRef.nativeElement.querySelector(`#${this.id}`);
        const ctx = canvasEl?.getContext('2d');

        if (this.config.data !== undefined) {
            this.chart = new Chart(ctx, this.config);
            this.onClickSub = fromEvent(canvasEl, 'click')
                .subscribe(Event => {
                    const points = this.chart.getElementsAtEventForMode(Event, 'nearest', { intersect: true }, true);

                    if (points.length) {
                        const firstPoint = points[0];
                        const label = this.chart.data.labels[firstPoint.index];
                        const value = this.chart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
                        console.log(firstPoint, label, value);
                    }
                });
        }
    }

    showError(error: any) {
        this.error = error;
    }

    onDestroy() {
        this.onClickSub.unsubscribe();
    }

    // https://www.chartjs.org/docs/latest/developers/api.html
    // https://www.youtube.com/watch?v=dIFLeum2WQY&list=PLnuit5448DojGFLD7hvAffu6jYBQZerhi&index=1&t=2s
}
