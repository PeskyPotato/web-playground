stations = [
    {
        data: { id: "000", s_name: "Centraal Station" },
        position: { x: 0, y: 0 }
    },
    {
        data: { id: "001", s_name: "Rokin"},
        position: { x: -50, y: 90 }
    },
    {
        data: { id: "002", s_name: "Vijzelgracht"},
        position: { x: -50, y: 215 }
    },
    {
        data: { id: "003", s_name: "de Pijp"},
        position: { x: -50, y: 305 }
    },
    {
        data: { id: "004", s_name: "Europaplein" },
        position: { x: -50, y: 440 }
    },
    {
        data: { id: "005", s_name: "Station Zuid" },
        position: { x: -180, y: 530 }
    },
    {
        data: { id: "006", s_name: "Noorderpark" },
        position: { x: 100, y: -110 }
    },
    {
        data: { id: "007", s_name: "Noord" },
        position: { x: 200, y: -215 }
    },
    {
        data: { id: "008", s_name: "Nieuwmarkt" },
        position: { x: 100, y: 50 }
    },
    {
        data: { id: "009", s_name: "Waterlooplein" },
        position: { x: 180, y: 120 }
    },
    {
        data: { id: "010", s_name: "Weesperplein" },
        position: { x: 215, y: 200 }
    },
    {
        data: { id: "011", s_name: "Wilbaustraat" },
        position: { x: 260, y: 275 }
    },
    {
        data: { id: "012", s_name: "Amstel" },
        position: { x: 310, y: 350 }
    },
    {
        data: { id: "013", s_name: "Spaklerweg" },
        position: { x: 360, y: 435 }
    },
    {
        data: { id: "014", s_name: "Overamstel" },
        position: { x: 290, y:535 }
    },
    {
        data: { id: "015", s_name: "RAI" },
        position: { x: 0, y: 535 }
    },
    {
        data: { id: "016", s_name: "Amstelveensweg" },
        position: { x: -340, y: 530 }
    },
    {
        data: { id: "017", s_name: "Henk Sneevlietweg" },
        position: { x: -440, y: 400 }
    },
    {
        data: { id: "018", s_name: "Heemstedestraat" },
        position: { x: -440, y: 270 }
    },
    {
        data: { id: "019", s_name: "Lelylaan" },
        position: { x: -440, y: 175 }
    },
    {
        data: { id: "020", s_name: "Postjesweg" },
        position: { x: -440, y: 105 }
    },
    {
        data: { id: "021", s_name: "Jan van Galenstraat" },
        position: { x: -440, y: 35 }
    },
    {
        data: { id: "022", s_name: "De Vlugtlaan" },
        position: { x: -440, y: -60 }
    },
    {
        data: { id: "023", s_name: "Sloterdijk" },
        position: { x: -400, y: -185 }
    },
    {
        data: { id: "024", s_name: "Isolatorweg" },
        position: { x: -240, y: -260 }
    },
    {
        data: { id: "025", s_name: "Van der Madeweg" },
        position: { x: 420, y: 615 }
    },
    {
        data: { id: "026", s_name: "Duivendrecht" },
        position: { x: 550, y: 735 }
    },
    {
        data: { id: "027", s_name: "Strandvliet" },
        position: { x: 640, y: 820 }
    },
    {
        data: { id: "028", s_name: "Bijlmer ArenA" },
        position: { x: 760, y: 920 }
    },
    {
        data: { id: "029", s_name: "Bullewijk" },
        position: { x: 840, y: 1000 }
    },
    {
        data: { id: "030", s_name: "Holendrecht" },
        position: { x: 980, y: 1130 }
    },
    {
        data: { id: "031", s_name: "Reigersbos" },
        position: { x: 1190, y: 1160 }
    },
    {
        data: { id: "032", s_name: "Gein" },
        position: { x: 1430, y: 1160 }
    },
    {
        data: { id: "033", s_name: "Vensperpolder" },
        position: { x: 650, y: 580 }
    },
    {
        data: { id: "034", s_name: "Diemen Zuid" },
        position: { x: 755, y: 510 }
    },
    {
        data: { id: "035", s_name: "Verrijn Stuartweg" },
        position: { x: 945, y: 490 }
    },
    {
        data: { id: "036", s_name: "Ganzenhoef" },
        position: { x: 1065, y: 580 }
    },
    {
        data: { id: "037", s_name: "Kraaiennest" },
        position: { x: 1155, y: 670 }
    },
    {
        data: { id: "038", s_name: "Gaasperplas" },
        position: { x: 1240, y: 730 }
    }
]

lines = [
    {
        l_name: "52",
        stations: ["007", "006", "000", "001", "002", "003", "004", "005"]
    }, {
        l_name: "51",
        stations: [
            "000", "008", "009", "010", "011", "012", "013", "014", "015", 
            "005", "016", "017", "018", "019", "020", "021", "022", "023", "024"
        ]
    }, {
        l_name: "50",
        stations: [
            "024", "023", "022", "021", "020", "019", "018", "017", "016",
            "005", "015", "014", "025", "026", "027", "028", "029", "030", "031",
            "032"
        ]
    }, {
        l_name: "53",
        stations: [
            "000", "008", "009", "010", "011", "012", "013", "025", "033",
            "034", "035", "036", "037", "038"
        ]
    }, {
        l_name: "54",
        stations: [
            "000", "008", "009", "010", "011", "012", "013", "025", "026",
            "027", "028", "029", "030", "031", "032"
        ]
    }
]

var cy = cytoscape({
    container: document.getElementById('cy'),
    elements: stations,
    style: [
        {
            selector: '.51',
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
                "font-size": 20
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