document.addEventListener('DOMContentLoaded', async function () {
    async function get_stations() {
        const response = fetch('./test.json');
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
					'content': 'data(s_name)',
					'background-color': 'white',
                    'border-color': 'black',
                    'border-width': 1,
					'width': 7,
					'height': 7
				}
			},
			{
				selector: 'edge',
				style: {
                    'width': 5,
                    'control-point-step-size': 20,
                    'label': 'data(label)',
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

    document.getElementById('toggle-piccadilly').addEventListener('click', function(){
        var edges = cy.elements('.Piccadilly');
        for(var edge of edges){
            edge.toggleClass("mute");
        }
    });
    document.getElementById('toggle-bakerloo').addEventListener('click', function(){
        var edges = cy.elements('.Bakerloo');
        for(var edge of edges){
            edge.toggleClass("mute");
        }
    });
    document.getElementById('toggle-district').addEventListener('click', function(){
        var edges = cy.elements('.District');
        for(var edge of edges){
            edge.toggleClass("mute");
        }
    });
    document.getElementById('toggle-central').addEventListener('click', function(){
        var edges = cy.elements('.Central');
        for(var edge of edges){
            edge.toggleClass("mute");
        }
    });
    document.getElementById('toggle-circle').addEventListener('click', function(){
        var edges = cy.elements('.Circle');
        for(var edge of edges){
            edge.toggleClass("mute");
        }
    });
    document.getElementById('toggle-elizabeth').addEventListener('click', function(){
        var edges = cy.elements('.Elizabeth');
        for(var edge of edges){
            edge.toggleClass("mute");
        }
    });
});

