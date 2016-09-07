  
 //   var controlSearch = new L.Control.Search({
	// 	position:'topleft',
	// 	layer: clustersfarmacias,
	// 	propertyName:'NOMBREREF',
	// 	initial: false,
	// 	zoom: 16
	// });
	
	
	var controlSearch = new L.Control.Search({
		layer: searchcluster,
		position:'topleft',
		propertyName: 'NOMBREREF',
		circleLocation: false,
		initial: false,				//search elements only by initial text
		casesesitive: false,		//search elements in case sensitive text
		// collapsed: true,
// 		container:'buscador',
		markerLocation:false,
		animateLocation:true,
		moveToLocation: function(latlng, title, map) {
			//map.fitBounds( latlng.layer.getBounds() );
// 			var zoom = map.getBoundsZoom(latlng.layer.getBounds());
  			map.setView(latlng, 16); // access the zoom
		}
	});

	controlSearch.on('search_locationfound', function(e) {
	    
	   // if(e.geometry.type=="Polygon")
		  //  e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
		if(e.layer._popup)
			e.layer.openPopup();
        // e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
	}).on('search_collapsed', function(e) {

		featuresLayer.eachLayer(function(layer) {	//restore feature color
			featuresLayer.resetStyle(layer);
		});	
	});
	
	// controlSearch.setLayer(clustersfarmacias);
	
	map.addControl( controlSearch);
	
	// searchcluster.addLayer(clustersfarmacias);
	// controlSearch._layer=searchcluster;