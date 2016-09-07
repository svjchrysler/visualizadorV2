
  	/**
	 * DRAW CONTROL
	 * Elementos del control Linea 940 (MODIFICADO)
	 * */
	 // Initialise the FeatureGroup to store editable layers
    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    
    // Initialise the draw control and pass it the FeatureGroup of editable layers
    var drawControl = new L.Control.Draw({
        draw: {
				position: 'topleft',
				polygon: {
					title: 'polygon!',
					allowIntersection: false,
					drawError: {
						color: '#b00b00',
						timeout: 1000
					},
					shapeOptions: {
						// color: '#bada55'
						color: '#112d91'
					},
					showArea: true
				},
				// polyline: {
				// 	metric: true
				// },
				circle: {
					shapeOptions: {
						color: '#662d91'
					}
				},
				rectangle:{
					shapeOptions:{
						color:'#992d91'
					}
				},
			},
        edit: {
            featureGroup: drawnItems
        }
    });
    
    map.on('draw:created', function (e) {
			
			var type = e.layerType,
				layer = e.layer;
			console.info("control-draw draw:created type",type);

			if (type === 'marker') {
				layer.bindPopup(type+' point!');
			}

			drawnItems.addLayer(layer);
		});
		
    map.addControl(drawControl);