import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ChartComponent } from './shared/components/chart/chart.component';
import { LoadingChartComponent } from './shared/components/loading-chart/loading-chart.component';
import { LoadingChartSpinnerComponent } from './shared/components/loading-chart-spinner/loading-chart-spinner.component';

@NgModule({ declarations: [
        AppComponent,
        ChartComponent,
        LoadingChartComponent,
        LoadingChartSpinnerComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
