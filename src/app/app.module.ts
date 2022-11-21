import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarChartComponent } from './shared/components/bar-chart/bar-chart.component';
import { LoadingChartComponent } from './shared/components/loading-chart/loading-chart.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';

@NgModule({
    declarations: [
        AppComponent,
        BarChartComponent,
        LoadingChartComponent,
        LoadingSpinnerComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
