async function get_stations() {
    const response = fetch('./test.json');
    return (await response).json();
}
async function get_lines() {
    const response = fetch('./lines.json');
    return (await response).json();
}


stations = await get_stations();
console.log(stations);
var lines = await get_lines();
// lines = [
//     {
//         l_name: "52",
//         stations: ["007", "006", "000", "001", "002", "003", "004", "005"]
//     }, {
//         l_name: "51",
//         stations: [
//             "000", "008", "009", "010", "011", "012", "013", "014", "015", 
//             "005", "016", "017", "018", "019", "020", "021", "022", "023", "024"
//         ]
//     }, {
//         l_name: "50",
//         stations: [
//             "024", "023", "022", "021", "020", "019", "018", "017", "016",
//             "005", "015", "014", "025", "026", "027", "028", "029", "030", "031",
//             "032"
//         ]
//     }, {
//         l_name: "53",
//         stations: [
//             "000", "008", "009", "010", "011", "012", "013", "025", "033",
//             "034", "035", "036", "037", "038"
//         ]
//     }, {
//         l_name: "54",
//         stations: [
//             "000", "008", "009", "010", "011", "012", "013", "025", "026",
//             "027", "028", "029", "030", "031", "032"
//         ]
//     }
// ]

var cy = cytoscape({
    container: document.getElementById('cy'),
    elements: stations,
    style: [
        {
            selector: '.elizabeth',
            style: {
                'line-color': 'yellow'
            }
        }, {
            selector: '.52',
            style: {
                'line-color': 'red'
            }
        }, {
            selector: '.50',
            style: {
                'line-color': 'purple'
            }
        }, {
            selector: ".53",
            style: {
                'line-color': '#0417e0'
            }
        }, {
            selector: ".54",
            style: {
                'line-color': '#046be0'
            }
        },
        {
            selector: 'edge',
            style: {
                'width': 5,
                'line-opacity': 1,
                'curve-style': 'bezier',
                'control-point-step-size': 20,
                'label': 'data(label)',
                'color': 'white',
                'text-outline-color': 'black',
                'text-outline-width': 1
            }
        },
        {
            selector: 'node',
            style: {
                shape: 'ellipse',
                'background-color': 'white',
                'border-color': 'black',
                'border-width': 1,
                label: 'data(s_name)',
                'color': 'white',
                "font-size": 12
            }
        },
   ],
    layout: {
        name: 'preset'
    }
});
cy.nodes().on('click', function(e){
  var ele = e.target;
  console.log(ele.id() + " " + ele.json().position.x + ", " +  ele.json().position.y);
});

for (var line of lines) {
    var stations = [];
    var current_station;
    var next_station;
    for (var i = 0; i < line.stations.length-1; i++) {
        stations = line.stations;
        current_station = stations[i];
        next_station = stations[i+1];
       if ((i == line.stations.length-2) | (i == 0)) {
            console.log(next_station);
            cy.add({
                data: {
                    id: line.l_name + current_station + next_station,
                    source: current_station,
                    target: next_station,
                    label: line.l_name
                },
                classes: line.l_name
            });
        } else {
            cy.add({
                data: {
                    id: line.l_name + current_station + next_station,
                    source: current_station,
                    target: next_station,
                    label: ''
                },
                classes: line.l_name
        })
 
        }
    }

}

// for (const station of stations) {
//     console.log(station);
//     cy.add({
//         data: { id: station.name},
//         position: station.position
//     })
// }
// 
// cy.zoom({
//   level: 1.0, // the zoom level
//   renderedPosition: { x: -50, y: 0}
// });
// 
// cy.layout({
//     name: "preset"
// });