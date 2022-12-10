import { CreateDiagonalPattern, CreateReverseDiagonalPattern, CreateGradientPattern } from '../functions/chartjs-backgrounds';
export { barChartConfig, stackedChartConfig, lineChartConfig, donutChartConfig, badChartConfig };

// e.g. 1 BAR
let barChartConfig: any = {
    id: 'barChart',
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
                backgroundColor: CreateGradientPattern('pink', 'red'),
                borderWidth: 2,
                borderColor: 'red'
            },
            {
                label: "Profit",
                data: [
                    '542', '542', '536', '327',
                    '17', '0.00', '538', '541'
                ],
                backgroundColor: CreateDiagonalPattern('green', 'lightgreen'),
                borderWidth: 2,
                borderColor: 'green',
                borderRadius: 5,
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        // resizeDelay: 250
    }
};

// e.g. 2 HORIZ. STACKED
let stackedChartConfig: any = {
    id: 'stackedChart',
    ariaLabel: 'A Sales/Profit comparison chart',
    type: 'bar',
    data: {
        labels: ['Sales', 'Profit'],
        datasets: [
            {
                label: "Sales",
                data: [
                    '467', '300', '250', '379',
                    '92', '30', '260', '240'
                ],
                backgroundColor: 'pink',
            },
            {
                label: "Profit",
                data: [
                    '567', '400', '536', '327',
                    '217', '230', '538', '250'
                ],
                backgroundColor: 'lightgreen',
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            // x: {
            //     stacked: true,
            // },
            y: {
                stacked: true
            }
        }
        // resizeDelay: 250
    }
};

// e.g. 3 LINE
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
                backgroundColor: '#6699ff'
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

// e.g. 4 DONUT
let donutChartConfig: any = {
    id: 'donutChart',
    ariaLabel: 'A DONUT chart',
    type: 'doughnut',
    data: {
        labels: ['Red', 'Orange', 'Purple', 'Green', 'Blue'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [12, 77, 29, 99, 4],
                backgroundColor: ['#ff6666', CreateGradientPattern('white', 'orange'), '#ff66ff', CreateReverseDiagonalPattern('green', 'lightgreen'), '#6699ff'],
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Donut Chart'
            }
        }
    },
}

// e.g. 5 BAD
let badChartConfig: any = {
    id: 'badChart',
    ariaLabel: 'A BAD chart'
};