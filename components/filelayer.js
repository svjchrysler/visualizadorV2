// L.Control.fileLayerLoad({
//         // Allows you to use a customized version of L.geoJson.
//         // For example if you are using the Proj4Leaflet leaflet plugin,
//         // you can pass L.Proj.geoJson and load the files into the
//         // L.Proj.GeoJson instead of the L.geoJson.
//         layer: L.geoJson,
//         // See http://leafletjs.com/reference.html#geojson-options
//         layerOptions: {style: {color:'red'}},
//         // Add to map after loading (default: true) ?
//         addToMap: true,
//         // File size limit in kb (default: 1024) ?
//         fileSizeLimit: 1024,
//         // Restrict accepted file formats (default: .geojson, .kml, and .gpx) ?
//         formats: [
//             '.geojson',
//             '.kml'
//         ]
//     }).addTo(map);


        var stylefilelayer = {color:'darkgreen', opacity: 0.5, fillOpacity: 0.05, weight: 3, clickable: false};
        // L.Control.FileLayerLoad.LABEL = '<img class="icon" src="image/folder.svg" alt="file icon"/>';
        L.Control.FileLayerLoad.LABEL = '<i class="fa fa-folder-open fa-1x" aria-hidden="true" style="margin-top:5px"></i>';
        L.Control.fileLayerLoad({
            fitBounds: true,
            layerOptions: {style: stylefilelayer,
                           pointToLayer: function (data, latlng) {
                              return L.circleMarker(latlng, {style: stylefilelayer});
                           }},
        }).addTo(map);