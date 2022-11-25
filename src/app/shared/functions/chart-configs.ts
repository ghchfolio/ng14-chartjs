import { CreateDiagonalPattern, CreateReverseDiagonalPattern } from './chartjs-helpers';
export { barChartConfig, lineChartConfig, badChartConfig }

let barChartConfig: any = {
    id: 'barChart',
    ariaLabel: 'A S ales/Profit comparison chart',
    type: 'bar',
    data: {
        labels: [],
        datasets: [
            {
                label: "Sales",
                data: [
                    '467', '576', '572', '79',
                    '92', '574', '573', '576'
                ],
                backgroundColor: CreateDiagonalPattern('red', 'pink'),
                borderWidth: 2,
                borderColor: 'red'
            },
            {
                label: "Profit",
                data: [
                    '542', '542', '536', '327',
                    '17', '0.00', '538', '541'
                ],
                backgroundColor: CreateReverseDiagonalPattern('green', 'lightgreen'),
                borderWidth: 2,
                borderColor: 'green',
                borderRadius: 5,
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        // resizeDelay: 250
    },
    errorMessage: ''
};

let lineChartConfig: any = {
    id: 'lineChart',
    ariaLabel: 'A Sales/Profit comparison chart',
    type: 'line',
    data: {
        labels: [],
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
};

let badChartConfig: any = {
    id: 'badChart',
    ariaLabel: 'A Sales/Profit comparison chart',
    type: 'bar',
    data: {
        labels: [],
        datasets: [
            {
                label: "Sales",
                data: [
                    '467', '576', '572', '79',
                    '92', '574', '573', '576'
                ],
                backgroundColor: CreateDiagonalPattern('red', 'pink'),
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
                borderRadius: 10,
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        // resizeDelay: 250
    },
    errorMessage: ''
};