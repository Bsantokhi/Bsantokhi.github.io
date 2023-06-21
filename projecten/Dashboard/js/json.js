const ctx = document.querySelector('#myChart');
const ctx2 = document.querySelector('#myChart2');
const ctx3 = document.querySelector('#myChart3');
const ctx4 = document.querySelector('#myChart4');
const ctx5 = document.querySelector('#myChart5');

const url = 'https://api.coincap.io/v2/assets';

const chartLabel = [];
const chartData = [];

fetch(url)
    .then(myData => myData.json())
    .then(jsonData => generateCharts(jsonData))

function generateCharts(jsonData) {
    console.log(jsonData);

    for (let i = 0; i < jsonData.data.length; i++) {
        const element = jsonData.data[0];
        chartLabel.push(element.name);
        chartData.push(element.priceUsd);

        console.log(element);
    }

    createCharts(chartLabel, chartData);
}

function createCharts(labels, data) {

    new Chart(ctx3, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
    
                data: data,
                fill: false,
                borderColor: 'rgb(255, 196, 0)',
                tension: 0.1
    
            }]
        }
    });
}

new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            
        ],
        datasets: [{
            label: 'Value',
            data: data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1

        }]
    }
});


new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: [
            'BTC',
            'ETH',
            'USDT'
        ],
        datasets: [{
            label: 'USDT',
            data: [100, 50, 300],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    }

});


new Chart(ctx3, {
    type: 'line',
    data: {
        labels: [
            'January',
            'Februari',
            'Maart',
            'April',
            'Mei',
            'Juni',
            'Juli',
        ],
        datasets: [{

            data: [452, 594, 553, 676, 502, 753, 806],
            fill: false,
            borderColor: 'rgb(255, 196, 0)',
            tension: 0.1

        }]
    }
})

new Chart(ctx4, {
    type: 'line',
    data: {
        labels: [
            'January',
            'Februari',
            'Maart',
            'April',
            'Mei',
            'Juni',
            'Juli',
        ],
        datasets: [{

            data: [452, 594, 553, 676, 502, 753, 806],
            fill: false,
            borderColor: 'rgb(225, 0, 255)',
            tension: 0.1

        }]
    }
})

new Chart(ctx5, {
    type: 'line',
    data: {
        labels: [
            'January',
            'Februari',
            'Maart',
            'April',
            'Mei',
            'Juni',
            'Juli',
        ],
        datasets: [{

            data: [452, 594, 553, 676, 502, 753, 806],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1

        }]
    }
})