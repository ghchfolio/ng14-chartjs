import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    barChartID = 'barChart';
    barChartAriaLabel = 'A bar chart';
    barChartConfig = {
        type: 'bar',
        data: {
            labels: [
                '2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
                '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',
            ],
            datasets: [
                {
                    label: "Sales",
                    data: [
                        '467', '576', '572', '79',
                        '92', '574', '573', '576'
                    ],
                    backgroundColor: this.createDiagonalPattern('green'),
                    borderWidth: 2,
                    borderColor: 'red'
                },
                {
                    label: "Profit",
                    data: [
                        '542', '542', '536', '327',
                        '17', '0.00', '538', '541'
                    ],
                    backgroundColor: 'limegreen',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderSkipped: false,
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            // resizeDelay: 250
        }
    }

    lineChartID = 'lineChart';
    lineChartAriaLabel = 'A line chart';
    linechartConfig = {
        type: 'line',
        data: {
            labels: [
                '2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
                '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',
            ],
            datasets: [
                {
                    label: "Sales",
                    data: [
                        '30', '50', '400', '791',
                        '192', '57', '3', '76'
                    ],
                    backgroundColor: 'yellow'
                },
                {
                    label: "Profit",
                    data: [
                        '54', '52', '536', '37',
                        '17', '0.00', '58', '41'
                    ],
                    backgroundColor: 'red'
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            resizeDelay: 125
        }
    }

    private createDiagonalPattern(color = 'gray') {
        const shape = document.createElement('canvas');
        shape.width = 10;
        shape.height = 10;
        let c = shape.getContext('2d');
        if (c !== null) {
            c.strokeStyle = color;
            c.beginPath();
            c.moveTo(2, 0);
            c.lineTo(10, 8);
            c.stroke();
            c.beginPath();
            c.moveTo(0, 8);
            c.lineTo(2, 10);
            c.stroke();
            return c.createPattern(shape, 'repeat');
        }
        return '#000000';
    }
}
