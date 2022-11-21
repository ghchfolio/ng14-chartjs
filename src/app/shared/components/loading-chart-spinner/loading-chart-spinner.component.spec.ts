import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingChartSpinnerComponent } from './loading-chart-spinner.component';

describe('LoadingChartSpinnerComponent', () => {
    let component: LoadingChartSpinnerComponent;
    let fixture: ComponentFixture<LoadingChartSpinnerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoadingChartSpinnerComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LoadingChartSpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
