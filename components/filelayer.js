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


var stylefilelayer = { color: 'darkgreen', opacity: 0.5, fillOpacity: 0.05, weight: 3, clickable: true };
var hoverStyle = { color: 'red', opacity: 0.5, fillOpacity: 0.05, weight: 3, clickable: true };
// var stylefilelayer = { color: 'darkgreen', opacity: 0.5, fillOpacity: 0.05, weight: 3, clickable: true };
// L.Control.FileLayerLoad.LABEL = '<img class="icon" src="image/folder.svg" alt="file icon"/>';
L.Control.FileLayerLoad.LABEL = '<i class="fa fa-folder-open fa-1x" aria-hidden="true" style="margin-top:5px"></i>';

var filelayercontrol = L.Control.fileLayerLoad({
        fitBounds: true,
        layerOptions: {
                style: stylefilelayer,
                pointToLayer: function (data, latlng) {
                        return L.circleMarker(latlng, { style: stylefilelayer });
                },
                onEachFeature: function (feature, layer) {
                if (feature.properties) {
                    var popupString = '<div class="popup">';
                    for (var k in feature.properties) {
                        var v = feature.properties[k];
                        popupString += k + ': ' + v + '<br />';
                    }
                    popupString += '</div>';
                    layer.bindPopup(popupString);
                }
                if (!(layer instanceof L.Point)) {
                    layer.on('mouseover', function () {
                        layer.setStyle(hoverStyle);
                    });
                    layer.on('mouseout', function () {
                        layer.setStyle(stylefilelayer);
                    });
                }
            }
        },
});
filelayercontrol.addTo(map);

filelayercontrol.loader.on('data:loaded', function (e) {
        console.info("filelayercontrol",e);
        var filename = e.filename;
        filename=filename.replace("."+e.format,"");
        console.info("filelayercontrol",filename);
        controlStyledLayer.addOverlay( e.layer, filename, {groupName : "Importado"} );
});

filelayercontrol.loader.on('data:error', function (e) {
        console.info("Error de filelayer",e);
        alert("Ocurrio un error al cargar el archivo "+e.filename+"!");
});