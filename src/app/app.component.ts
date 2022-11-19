import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    barChartId = 'barChart';
    barChartAriaLabel = 'A bar chart';
    barChartConfig = {
        type: 'bar',
        data: {
            labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
                '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
            datasets: [
                {
                    label: "Sales",
                    data: ['467', '576', '572', '79', '92',
                        '574', '573', '576'],
                    backgroundColor: 'blue'
                },
                {
                    label: "Profit",
                    data: ['542', '542', '536', '327', '17',
                        '0.00', '538', '541'],
                    backgroundColor: 'limegreen',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderSkipped: false,
                }
            ]
        },
        options: {
            // aspectRatio: 2.5
            // responsive: true
        }
    }

    lineChartId = 'lineChart';
    lineChartAriaLabel = 'A line chart';
    lineChartConfig = {
        type: 'line',
        data: {
            labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
                '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
            datasets: [
                {
                    label: "Sales",
                    data: ['30', '50', '400', '791', '192',
                        '57', '3', '76'],
                    backgroundColor: 'yellow'
                },
                {
                    label: "Profit",
                    data: ['54', '52', '536', '37', '17',
                        '0.00', '58', '41'],
                    backgroundColor: 'red'
                }
            ]
        },
        options: {
            // aspectRatio: 2.5
            // responsive: true
        }
    }
}
