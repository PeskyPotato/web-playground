window.onload = function() {

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

function renderChart(title_text) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
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
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return ['rgba(' + r + ', ' + g + ', ' + b + ', ' + 1 +')', 'rgba(' + r + ', ' + g + ', ' + b + ', ' + 0.5 +')'];
}

function addData(data) {
    prev_episodes = 0;
    prev_rating = 0;
	for (var i = 0; i < data["ratings"].length; i++) {
        var season = data["ratings"][i].season
        var episode = data["ratings"][i].episode
        var averageRating = data["ratings"][i].averageRating

        console.log("S" + season.toString() + " E" + episode.toString());

        dataPoints["labels"].push("S" + season.toString() + " E" + episode.toString());
        
        if (dataPoints["datasets"].length < season) {
            var color = getRandomRgb();
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

$.getJSON("./data/tv_episodes/How_I_Met_Your_Mother_(2005).json", addData);

}