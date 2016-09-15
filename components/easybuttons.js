/**
 * CENTER MAP BUTTON
 */
L.easyButton('<i class="fa fa-eye fa-lg" aria-hidden="true" style="margin-left:-3px; margin-top:4px"></i>', function () {
    if (geojsonDistrito) {
        map.fitBounds(geojsonDistrito.getBounds());
    } else {
        if (geojson)
            map.fitBounds(geojson.getBounds());
        else {
            // map.setView([-17.78361, -63.18212], 11);
            map.locate({ setView: true, watch: false });
            map.on("locationfound", function (e) {
                console.info("location found", e);
                map.stopLocate();
            });
        }
    }
    // map.setView(map.getCenter(), 7);
}, 'Centrar Vista').addTo(map);

/**
 * ADD INFO BUTTON
 */
L.easyButton('<i class="fa fa-info fa-lg" aria-hidden="true" style="margin-left:2px; margin-top:4px;"></i>', function () {
    if (sidebar) {
        sidebar.setContent("<iframe id='frameSlideInfo' name='frameSlideInfo' src='informacion.html' width='50%' height='95%'></iframe>");
        sidebar.toggle();
        setTimeout(function () {
            menuL.show();
        }, 400);
    }
}, 'Informacion').addTo(map);



/**
 * LOCATION BUTTON
 */
// var circle ;

// var stateChangingButton = L.easyButton({
//     states: [{
//             stateName: 'locationOn',   // name the state
//             icon:      'fa-location-arrow fa-lg',          // and define its properties
//             title:     'Location', // like its title
//             onClick: function(btn, map) {  // and its callback
//                  map.locate({setView:true})
//                     .on('locationfound', function(e){
//                             circle= L.circle([e.latitude, e.longitude], e.accuracy/2, {
//                                 weight: 1,
//                                 color: 'black',
//                                 fillColor: 'gray',
//                                 fillOpacity: 1.0
//                             });
//                             if(!map.hasLayer(circle))
//                                 map.addLayer(circle);
//                         })
//                     .on('locationerror', function(e){
//                             console.info("locationerror",e);
//                             alert("Location access denied.");
//                         });
//                 btn.state('locationOff'); // change state on click!
//             }
//         }, {
//             stateName: 'locationOff',
//             icon:      'fa-rotate-left fa-lg',
//             title:     'Location Off',
//             onClick: function(btn, map) {
//                 map.removeLayer(circle);
//                 btn.state('locationOn');
//             }
//     }]
// }) .addTo(map);