import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Chart, ChartItem } from 'node_modules/chart.js/auto';
import { ChartError } from 'src/app/interfaces/chart-error';
import { fromEvent, Subscription } from 'rxjs';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

    @Input() id?: string;
    @Input() ariaLabel?: string;
    @Output() goToPage = new EventEmitter();

    isHelpOpen = false;
    helpBtnText = 'Show';

    chart: any = {};
    config: any = {};
    error?: ChartError;
    onClickSub: Subscription = new Subscription();

    constructor(private elementRef: ElementRef) { }

    onSuccess(config: any) {
        this.config = config;
        const canvasEl: HTMLCanvasElement = this.elementRef.nativeElement.querySelector(`#${this.id}`);
        const ctx = canvasEl?.getContext('2d') as ChartItem;

        if (this.config.data !== undefined) {

            // create chart
            this.chart = new Chart(ctx, this.config);

            // sub to click event
            this.onClickSub = fromEvent(canvasEl, 'click')
                .subscribe(Event => {
                    const points = this.chart.getElementsAtEventForMode(Event, 'nearest', { intersect: true }, true);

                    if (points.length) {
                        const firstPoint = points[0];
                        const label = this.chart.data.labels[firstPoint.index];
                        const value = this.chart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
                        // console.log(firstPoint, label, value);
                        this.goToPage.emit(firstPoint);
                    }
                });
        }
    }

    onError(error: ChartError) {
        this.error = error;
    }

    onToggleHelp(e: any) {
        this.isHelpOpen = !this.isHelpOpen;
        if (this.isHelpOpen === true) {
            this.helpBtnText = 'Hide';
        } else {
            this.helpBtnText = 'Show';
        }
    }

    onDestroy() {
        this.onClickSub.unsubscribe();
    }

    // https://www.chartjs.org/docs/latest/developers/api.html
    // https://www.youtube.com/watch?v=dIFLeum2WQY&list=PLnuit5448DojGFLD7hvAffu6jYBQZerhi&index=1&t=2s
}
// DONE add side slideout panel
// DONE add working taggle button
// TODO get window with (may do flip card)
// TODO animate slideout
// TODO fade in text?