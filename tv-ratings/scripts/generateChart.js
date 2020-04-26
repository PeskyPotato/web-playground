window.onload = function() {
    var chart;
    var dataPoints = {
        labels: [],
        datasets: [{
            backgroundColor: 'rgba(0, 65, 168, 1)',
            borderColor: 'rgba(0, 65, 168, 0.5)',
            fill: false,
            tension: 0,
            data: []
        }]
    };

    function clear() {
        if (typeof chart !== 'undefined') {
            chart.destroy();
        }
        dataPoints = {
            labels: [],
            datasets: [{
                backgroundColor: 'rgba(0, 65, 168, 1)',
                borderColor: 'rgba(0, 65, 168, 0.5)',
                fill: false,
                tension: 0,
                data: []
            }]
        };
    }

    function renderChart(title_text) {
        let ctx = document.getElementById('myChart').getContext('2d');
        chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: dataPoints,

            // Configuration options go here
            options: {
                title: {
                    display: true,
                    text: title_text,
                    fontSize: 18,
                    // fontColor: "#000000"
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{

                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    }]
                },
                bezierCurve: false
            }
        });
    }

    function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return ['rgba(' + r + ', ' + g + ', ' + b + ', ' + 1 +')', 'rgba(' + r + ', ' + g + ', ' + b + ', ' + 0.5 +')'];
    }

    function addData(data) {
        clear();
        prev_episodes = 0;
        prev_rating = 0;
        for (let i = 0; i < data["ratings"].length; i++) {
            let season = data["ratings"][i].season
            let episode = data["ratings"][i].episode
            let averageRating = data["ratings"][i].averageRating

            console.log("S" + season.toString() + " E" + episode.toString());

            dataPoints["labels"].push("S" + season.toString() + " E" + episode.toString());
            
            if (dataPoints["datasets"].length < season) {
                let color = getRandomRgb();
                dataPoints["datasets"].push({
                    backgroundColor: color[0],
                    borderColor: color[1],
                    fill: false,
                    tension: 0,
                    data: Array(prev_episodes-1).fill(null)
                });
                dataPoints["datasets"][season -1]["data"].push(prev_rating);
            }

            dataPoints["datasets"][season - 1]["data"].push(averageRating);

            prev_episodes++;
            prev_rating = averageRating
        }

        console.log(dataPoints);
        renderChart(data["title"] + " (" + data["year"] + ")");
    }
    $.getJSON("./data/tv_episodes/"+$('#shows').val()+".json", addData);

    $('#shows').on('change', function() {
        console.log(this.value);
        $.getJSON("./data/tv_episodes/"+this.value+".json", addData);
    });

}