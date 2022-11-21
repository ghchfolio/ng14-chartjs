import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarChartComponent } from './shared/components/bar-chart/bar-chart.component';
import { LoadingChartComponent } from './shared/components/loading-chart/loading-chart.component';

@NgModule({
    declarations: [
        AppComponent,
        BarChartComponent,
        LoadingChartComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
