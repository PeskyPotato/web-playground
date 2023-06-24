document.addEventListener('DOMContentLoaded', async function () {
    async function get_stations() {
        const response = fetch('./stations.json');
        return (await response).json();
    }
    async function get_lines() {
        const response = fetch('./lines.json');
        return (await response).json();
    }

    var raw_stations = await get_stations();
    var lines = await get_lines();
    console.log(lines);
	var cy = window.cy = cytoscape({
		container: document.getElementById('cy'),

		style: [
			{
				selector: 'core',
				style: {
					'active-bg-opacity': 0
				}
			},

			{
				selector: 'node',
				style: {
					// 'content': 'data(s_name)',
					'background-color': 'white',
                    'border-color': 'black',
                    'border-width': 1,
					'width': 7,
					'height': 7,
                    'text-rotation': -1,
                    'text-halign': 'right',
                    'font-size': 12
				}
			},
			{
				selector: 'edge',
				style: {
                    'width': 5,
                    'control-point-step-size': 20,
                    // 'label': 'data(label)',
					'curve-style': 'bezier'
				}
			},
            {
                selector: '.Elizabeth',
                style: {
                    'line-color': 'purple'
                }
            },
            {
                selector: '.Piccadilly',
                style: {
                    'line-color': '#1B3F94'
                }
            },
            {
                selector: '.Bakerloo',
                style: {
                    'line-color': '#B0600E'
                }
            },
            {
                selector: '.Waterloo',
                style: {
                    'line-color': '#84CDBC'
                }
            },
            {
                selector: '.District',
                style: {
                    'line-color': '#24843D'
                }
            },
            {
                selector: '.Central',
                style: {
                    'line-color': '#EE2E21'
                }
            },
            {
                selector: '.Circle',
                style: {
                    'line-color': '#FCD106'
                }
            },
            {
                selector: '.Hammersmith',
                style: {
                    'line-color': '#F386A0'
                }
            },
            {
                selector: '.Jubilee',
                style: {
                    'line-color': '#959CA1'
                }
            },
            {
                selector: '.Metropolitan',
                style: {
                    'line-color': '#97015E'
                }
            },
            {
                selector: '.Northern',
                style: {
                    'line-color': '#231F20'
                }
            },
            {
                selector: '.Victoria',
                style: {
                    'line-color': '#2A9DDC'
                }
            },
            {
                selector: '.mute',
                style: {
                    'opacity': 0
                }
            },
			{
				selector: ':selected',
				style: {
					'line-color': '#0056DA',
					'target-arrow-color': '#0056DA',
					'background-color': '#0056DA'
				}
			},

			{
				selector: 'node, edge',
				style: {
					'transition-property': 'opacity',
					'transition-duration': '250ms',
					'transition-timing-function': 'ease-in-out'
				}
			},

			{
				selector: '.leaflet-viewport',
				style: {
					'opacity': 0.333,
					'transition-duration': '0ms',
				}
			}
		],

		elements: {
			nodes: raw_stations
		},

		layout: {
			name: 'preset',
			fit: false
		}
	});

	var leaf = cy.leaflet({
		container: document.getElementById('cy-leaflet')
	});

	leaf.map.removeLayer(leaf.defaultTileLayer);

	window.map = leaf.map;
	window.L = L;

	// set your own tiles, e.g. carto
	L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		subdomains: 'abcd',
		maxZoom: 19
	}).addTo(leaf.map);

    // Print coordinates of node when clicked, does not work
    cy.on('tap', 'node', function (evt) {
         console.log(evt.target.id())
    });
    cy.nodes().on('click', function(e){
        var ele = e.target;
        console.log(ele.id() + " " + ele.json().position.x + ", " +  ele.json().position.y);
    });

	var i = 0;
    for (var line of lines) {
        var stations = [];
        var current_station;
        var next_station;
        for (var i = 0; i < line.stations.length-1; i++) {
            stations = line.stations;
            current_station = stations[i];
            next_station = stations[i+1];
           if ((i == line.stations.length-2) | (i == 0)) {
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

    var bottom_nodes = [
        "[s_name = 'Custom House']", "[s_name = 'Canary Wharf']",
        "[s_name = 'Heathrow Terminal 5']", "[s_name = 'Heathrow Terminal 4']"
    ]
    for (var n_selector of bottom_nodes) {
        var n = cy.elements(n_selector)
        console.log(n)
        n.style('text-halign', 'left')
        n.style('text-valign', 'bottom')
    }
    var center_nodes = [
        "[s_name = 'Heathrow Terminals 2 & 3']"
    ]
    for (var n_selector of center_nodes) {
        var n = cy.elements(n_selector)
        console.log(n)
        n.style('text-rotation', 0)
        n.style('text-halign', 'right')
    }
});

