

var pois = L.tileLayer.underneath('http://{s}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/' +
    '{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoibGllZG1hbiIsImEiOiJjaWtjYjh5cGcwMDNhdm5sdmoycmgzY3drIn0.CZCSz1N53qWOVB0j2A_5pg', {
        layers: ['poi_label'],
        lazy: true,
    })
    .addTo(map);

map.on('click', function (e) {
    if (underneathEventsActive) {
    // $(".fa-star").css("color","blue");
        // $(".fa-star").css("color:blue !important;");
        var results = [],
            content = '<h2>Cerca</h2> <ul>',
            showResults = function (results) {
                featureLayer.addData(results);
                for (var i = 0; i < results.length; i++) {
                    var f = results[i],
                        c = f.geometry.coordinates;
                    content += '<li><span class="maki-icon ' +
                        f.properties.maki + '"></span>' +
                        f.properties.name +
                        '</li>';
                }

                content += '</ul>';

                L.popup()
                    .setLatLng(e.latlng)
                    .setContent(content)
                    .openOn(map);
            };

        featureLayer.clearLayers();
        pois.query(e.latlng, function (err, results) {
            if (results.length > 0) {
                results = results.splice(0, 5);
                showResults(results);
            }
        }, null, 50);
    }else{
    // $(".fa-star").css("color","black");
        // $(".fa-star").css("color:red !important;");
    }
});

$(".fa-star").click(function(e){
    // $(".fa-star").toggleClass(".starblue");
    console.info($(this).parent().toggleClass("starblue"));
});