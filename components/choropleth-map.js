var win = L.control.window(map, { title: 'Information!', content: 'My Info Windows.', modal: true });
var geojson;
var geojsonDistrito;

var nombreTematico = 'Descripcion';
var nombreDistrito = 'Limites de Distrito';


var info = L.control({ position: 'bottomleft' });
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};


//obtener la direccion absoluta de la pagina
function getAbsolutePath() {
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}

/**
 * Verificar si existe la url
 */
function existeUrl(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    // console.info("http status", http.status);
    return http.status != 404;
}

/**
 * actualizar la informacion
 */
info.update = function (props, layer) {
    // var ref="<a id='btnref' target='_blank' href='"+getAbsolutePath()+"graficos/"+nombreTematico+".html'><b>Graficos Estadisticos</b></a>";
    // var ref="<a id='btnref' target='_self' width='100px' href='#' onclick='return referencia();'><b>Graficos Estadisticos</b></a>";
    var ref = '';
    var btn = '';
    // var btn="<div  id='btni' onclick='return referencia("+'"files"'+");'><b>Ver Ficha Tecnica</b></div>";
    // var btn="<input  id='btni' type='button' value='Ver Ficha Tecnica' onclick='return referencia("+'"files"'+");'>";
    var contenido = 'Descripcion';
    if (props) {
        switch (nombreTematico) {
            case 'Departamento':
                btn = "<br><br><a  id='btnref' onclick='return referencia(" + '"' + nombreTematico + '"' + ");'><b>Informe Tecnico</b></a>";
                ref = '';
                contenido = ''
                    // +'<h2>' + props.nombre + '</h2>'
                    + "<center><b>Poblacion</b></center>"
                    + "<br><b>Total: </b>" + props.total
                    + "<br><b>Hombres: </b>" + props.hombre + " hab."
                    + "<br><b>Mujeres: </b>" + props.mujer + " hab."
                    + "<br><br><b>Total Urbano: </b>" + props.total_urb + " hab."
                    + "<br><b>Hombres: </b>" + props.hombre_urb + " hab."
                    + "<br><b>Mujeres: </b>" + props.mujer_urb + " hab."
                    + "<br><br><b>Total Rural: </b>" + props.total_ru + " hab."
                    + "<br><b>Hombres: </b>" + props.hombre_ru + " hab."
                    + "<br><b>Mujeres: </b>" + props.mujer_ru + " hab."
                    + "<br><br><b>Fuente: CNPV-2012</b>"
                    + "";
                // info._container.style.visibility = 'visible';
                // layer.bindPopup(contenido + btn + ref);
                win.title(props.nombre)
                    .content(contenido + '<br>' + btn + '<br>' + ref)
                    .show();
                break;
            case 'Provincia':
                btn = "<br>";
                // ref="<br><a id='btnref' target='_blank' href='"+getAbsolutePath()+"graficos/"+nombreTematico+".html'><b>Graficos Estadisticos</b></a>";
                ref = "<br><a  id='btnref' onclick='return refgrafico(" + '"' + nombreTematico + '",' + '"' + getAbsolutePath() + "graficos/" + nombreTematico + '.html"' + ");'><b>Graficos Estadisticos</b></a>";
                contenido = ''
                    // +'<h2>' + props.nombre + '</h2>'
                    + "<center><b>Poblacion</b></center>"
                    + "<br><b>Total: </b>" + props.total
                    + "<br><b>Hombres: </b>" + props.hombre + " hab."
                    + "<br><b>Mujeres: </b>" + props.mujer + " hab."
                    + "<br><br><b>Total Urbano: </b>" + props.total_urb + " hab."
                    + "<br><b>Hombres: </b>" + props.hombre_urb + " hab."
                    + "<br><b>Mujeres: </b>" + props.mujer_urb + " hab."
                    + "<br><br><b>Total Rural: </b>" + props.total_ru + " hab."
                    + "<br><b>Hombres: </b>" + props.hombre_ru + " hab."
                    + "<br><b>Mujeres: </b>" + props.mujer_ru + " hab."
                    + "<br><br><b>Fuente: CNPV-2012</b>"
                    + "";
                // info._container.style.visibility = 'visible';
                // layer.bindPopup(contenido + btn + ref);
                win.title(props.nombre)
                    .content(contenido + '<br>' + btn + '<br>' + ref)
                    .show();
                break;
            case 'Municipio':
                btn = "<br>";
                // ref="<br><a id='btnref' target='_blank' href='"+getAbsolutePath()+"graficos/"+nombreTematico+".html'><b>Graficos Estadisticos</b></a>";
                ref = "<br><a  id='btnref' onclick='return refgrafico(" + '"' + nombreTematico + '",' + '"' + getAbsolutePath() + "graficos/" + nombreTematico + '.html"' + ");'><b>Graficos Estadisticos</b></a>";
                contenido = ''
                    // +'<h2>' + props.nombre + '</h2>'
                    + "<center><b>Poblacion</b></center>"
                    + "<br><b>Total: </b>" + props.total
                    + "<br><b>Hombres: </b>" + props.hombre + " hab."
                    + "<br><b>Mujeres: </b>" + props.mujer + " hab."
                    + "<br><br><b>Total Urbano: </b>" + props.total_urb + " hab."
                    + "<br><b>Hombres: </b>" + props.hombre_urb + " hab."
                    + "<br><b>Mujeres: </b>" + props.mujer_urb + " hab."
                    + "<br><br><b>Total Rural: </b>" + props.total_ru + " hab."
                    + "<br><b>Hombres: </b>" + props.hombre_ru + " hab."
                    + "<br><b>Mujeres: </b>" + props.mujer_ru + " hab."
                    + "<br><br><b>Fuente: CNPV-2012</b>"
                    + "";
                // info._container.style.visibility = 'visible';
                // layer.bindPopup(contenido + btn + ref);
                win.title(props.nombre)
                    .content(contenido + '<br>' + btn + '<br>' + ref)
                    .show();
                break;
            case 'Distrito':
                btn = "";
                ref = "<br><a  id='btnref' onclick='return refgrafico(" + '"' + nombreTematico + '",' + '"' + getAbsolutePath() + "graficos/" + nombreTematico + '.html"' + ");'><b>Graficos Estadisticos</b></a>";
                // ref="<br><a id='btnref' target='_blank' href='"+getAbsolutePath()+"graficos/"+nombreTematico+".html'><b>Graficos Estadisticos</b></a>";
                contenido = ''
                    // + '<h4><b>' + props.nombre + '</b></h4>'
                    + "<b>Superficie:</b> " + props.superficie + ' km2'
                    + '';
                // info._container.style.visibility = 'visible';
                win.title(props.nombre)
                    .content(contenido + '<br>' + btn + '<br>' + ref)
                    .show();

                break;
            // case 'Distritos':
            case 'Municipio de Santa Cruz':
                console.info('nombreDistrito', nombreDistrito);
                if (nombreDistrito == "Distrito 02") {
                    btn = "<br><a  id='btnref' onclick='return referencia(" + '"' + nombreDistrito + '"' + ");'><b>Informe Tecnico</b></a>";
                    // ref = "<br><a  id='btnref' onclick='return refgrafico(" + '"' + nombreDistrito + '",' + '"' + getAbsolutePath() + "graficos/" + nombreDistrito + '.html"' + ");'><b>Graficos Estadisticos</b></a>";
                    ref = "<br><a  id='btnref' href='"+ getAbsolutePath() + "graficos/" + nombreDistrito + ".html'" + " target='_blank'><b>Graficos Estadisticos</b></a>";
                    // ref="<br><a id='btnref' target='_blank' href='"+getAbsolutePath()+"graficos/"+nombreTematico+".html'><b>Graficos Estadisticos</b></a>";
                } else {
                    btn = '';
                    ref = '';
                }
                contenido = ''
                    // +'<h4>' + nombreDistrito + '</h4>'
                    // + "<b>UV:</b> " + props.UV_ET
                    + (props.UV_ET ? "<b>UV:</b> " + props.UV_ET : '')
                    + (props.nombre ? "<b>Urbanizaciones: </b> " + props.nombre : '')
                    // + props.man?'':"<b>Manzana:</b> " + props.man
                    + '';
                // info._container.style.visibility = 'visible';
                win.title(nombreDistrito)
                    .content(contenido + '<br>' + btn + '<br>' + ref)
                    .show();
                break;
            default:
                btn = '';
                ref = '';
                contenido = ''
                    // +'<h4>' + nombreDistrito + '</h4>'
                    // + "<b>UV:</b> " + props.UV_ET
                    + (props.UV_ET ? "<b>UV:</b> " + props.UV_ET : '')
                    + (props.nombre ? "<b>Otras areas urbanas: </b> " + props.nombre : '')
                    // + props.man?'':"<b>Manzana:</b> " + props.man
                    + '';
                win.title(nombreTematico)
                    .content(contenido)
                    .show();
                break;
        }
    }
    this._div.innerHTML = contenido + btn + ref;
};

function getColor(d) {
    // return d > 100000 ? '#800026' :
    //     d > 7500000 ? '#BD0036' :
    //         d > 500000 ? '#BC0016' :
    //             d > 250000 ? '#BE0026' :
    //                 d > 10000 ? '#AB1A1C' :
    //                     d > 8000 ? '#AC4E2A' :
    //                         d > 6000 ? '#FD8D3C' :
    //                             d > 4000 ? '#934A10' :
    //                                 d > 2000 ? '#966305' :
    //                                     '#766305';
    return d > 100000 ? '#7f0000' :
        d > 75000 ? '#990000' :
            d > 50000 ? '#b20000' :
                d > 25000 ? '#cc0000' :
                    d > 10000 ? '#e50000' :
                        d > 8000 ? '#ff1919' :
                            d > 6000 ? '#ff3232' :
                                d > 4000 ? '#fe4c4c' :
                                    d > 2000 ? '#ff6565' :
                                        '#ee6565';
    // '#990026';
}

function styleFeature(feature) {
    return {
        fillColor: getColor(feature.properties.poblacion2),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '',
        fillOpacity: 0.4
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: '#555',
        dashArray: '',
        fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}


function resetHighlight(e) {
    if (geojson) {
        geojson.resetStyle(e.target);
    }
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
    var prop = e.target.feature.properties;

    if (geojsonTematicos.hasOwnProperty(prop.filetype)) {
        nombreTematico = prop.filetype;
        geojson = geojsonTematicos[nombreTematico];
    }
    info.update(prop, e.target);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}
/**
 * PROVINCIA
 */
// function getColorProvincia(d) {
//     return d > 1200000 ? '#800026' :
//         d > 100000 ? '#BE0026' :
//             d > 60000 ? '#BC0016' :
//                 d > 20000 ? '#AB1A1C' :
//                     d > 10000 ? '#BD0036' :
//                         d > 8000 ? '#AC4E2A' :
//                             d > 6000 ? '#FD8D3C' :
//                                 d > 4000 ? '#934A10' :
//                                     d > 2000 ? '#966305' :
//                                         '#766305';
// }
// function styleProvincia(feature) {
//     return {
//         fillColor: getColorProvincia(feature.properties.poblacion2),
//         weight: 2,
//         opacity: 1,
//         color: 'white',
//         dashArray: '3',
//         fillOpacity: 0.4
//     };
// }
/**
 * DISTRITOS
 */
function highlightFeatureDistritos(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (geojsonTematicos.hasOwnProperty(layer.feature.properties.filetype)) {
        nombreTematico = layer.feature.properties.filetype;
        geojson = geojsonTematicos[nombreTematico];
    }
}
function resetHighlightDistritos(e) {
    if (geojsonDistrito) {
        geojsonDistrito.resetStyle(e.target);
    }
}
function viewLegend(e) {
    map.fitBounds(e.target.getBounds());
    var props = e.target.feature.properties;
    if (!props.filetype) {
        nombreTematico = "Municipio de Santa Cruz";
        nombreDistrito = (props.DISTRITO ? "Distrito " + props.DISTRITO : props.nombre);
    } else {
        nombreTematico = props.filetype;
        nombreDistrito = props.nombre;
    }
    info.update(e.target.feature.properties);
}
function onEachFeatureDistritos(feature, layer) {

    layer.on({
        mouseover: highlightFeatureDistritos,
        mouseout: resetHighlightDistritos,
        // click: zoomToFeature
        click: viewLegend
    });
}







/**
 * LEGEND
 */
var legend = L.control({ position: 'bottomleft' });

legend.onAdd = function (map) {
    // console.info("legend for", nombreTematico);
    var div = L.DomUtil.create('div', 'info legend'),
        //   grades = [0, 1256801, 13073, 60359,8000, 10000, 50000, 100000],
        grades = [0, 2000, 4000, 6000, 8000, 10000, 50000, 100000],
        // labels = ['#FFEDA0', '#FED976','#FEB24C','#FD8D3C', '#FC4E2A','#E31A1C','#BD0026','#800026' ];
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};


legend.addTo(map);

// console.log(legend);
//filetype
info.addTo(map);

var markersTematicos = {};
var geojsonTematicos = {};
var geojsonDistritos = {};
var puntosDepartamento;
var puntosProvincia;
var puntosMunicipio;
var geojsonPtosInteres = {};
/**
 * funcion para asignar el geojson 
 * desde los eventos del menu 
 */
function tematicoSelect(obj) {
    switch (obj.group.name) {
        case "Mapas Base":
            break;
        case 'Categorias':
            controlSearch._layer = obj.layer;
            searchcluster.addLayer(obj.layer);
            break;

        // case 'Tematicos':
        case 'Cartografia Nacional':
            if (obj.name == "Departamento") {

                if (puntosDepartamento) {
                    puntosDepartamento.addTo(map);

                } else {
                    $.getJSON("datos/points/departamentos.geojson", function (data) {
                        var ratIcon = L.AwesomeMarkers.icon({
                            prefix: 'fa',
                            icon: 'square',
                            iconColor: 'green',
                            // markerColor: 'red',
                            // extraClasses: 'fa-rotate-90',
                            // spin: true
                        });

                        nombreTematico = obj.name;
                        puntosDepartamento = L.geoJson(data, {
                            pointToLayer: function (feature, latlng) {
                                var contenido = ''
                                    + '<b>' + feature.properties.nombre + '</b>'
                                    + '';
                                btn = "<br><br><a  id='btnref' onclick='return referencia(" + '"' + nombreTematico + '"' + ");'><b>Informe Tecnico</b></a>";
                                contenido = ''
                                    // +'<h2>' + feature.properties.nombre + '</h2>'
                                    + "<center><b>Poblacion</b></center>"
                                    + "<br><b>Total: </b>" + feature.properties.total
                                    + "<br><b>Hombres: </b>" + feature.properties.hombre + " hab."
                                    + "<br><b>Hombres: </b>" + feature.properties.mujer + " hab."
                                    + "<br><br><b>Total Urbano: </b>" + feature.properties.total_urb + " hab."
                                    + "<br><b>Hombres: </b>" + feature.properties.hombre_urb + " hab."
                                    + "<br><b>Mujeres: </b>" + feature.properties.mujer_urb + " hab."
                                    + "<br><br><b>Total Rural: </b>" + feature.properties.total_ru + " hab."
                                    + "<br><b>Hombres: </b>" + feature.properties.hombre_ru + " hab."
                                    + "<br><b>Mujeres: </b>" + feature.properties.mujer_ru + " hab."
                                    + "<br><br><b>Fuente: CNPV-2012</b>"
                                    + "";

                                // info.update(feature.properties,undefined);
                                var marker = L.marker(latlng, { icon: ratIcon });
                                marker.bindLabel(feature.properties.nombre);
                                marker.bindPopup(contenido + '<br>' + btn + '<br>');
                                marker.addEventListener('click', function (e) {
                                    map.setView(e.latlng);
                                });
                                return marker;
                            }
                        }).addTo(map);
                        map.fitBounds(puntosDepartamento.getBounds());
                    });
                }
                enableMap();
            } else {
                if (obj.name == "Provincias") {

                    if (puntosProvincia) {
                        puntosProvincia.addTo(map);
                        map.fitBounds(puntosProvincia.getBounds());
                    } else {
                        $.getJSON("datos/points/provincias.geojson", function (data) {
                            var ratIcon = L.AwesomeMarkers.icon({
                                prefix: 'fa',
                                icon: 'circle',
                                iconColor: 'blue'
                            });


                            puntosProvincia = L.geoJson(data, {
                                pointToLayer: function (feature, latlng) {
                                    var contenido = ''
                                        + '<b>' + feature.properties.nombre + '</b>'
                                        + "<br><br><a  id='btnref' href='" + getAbsolutePath() + "graficos/" + obj.name + ".html'" + "' target='_blank'><b>Graficos Estadisticos</b></a>"
                                        + '';
                                    var marker = L.marker(latlng, { icon: ratIcon });

                                    marker.bindLabel(feature.properties.nombre);
                                    marker.bindPopup(contenido);
                                    marker.addEventListener('click', function (e) {
                                        map.setView(e.latlng);
                                    });
                                    return marker;
                                }
                            }).addTo(map);
                            map.fitBounds(puntosProvincia.getBounds());
                        });
                    }
                    enableMap();
                } else {
                    if (obj.name == "Municipios") {

                        if (puntosMunicipio) {
                            puntosMunicipio.addTo(map);
                            map.fitBounds(puntosMunicipio.getBounds());
                        } else {
                            $.getJSON("datos/points/municipios.geojson", function (data) {
                                var ratIcon = L.AwesomeMarkers.icon({
                                    prefix: 'fa',
                                    icon: 'circle',
                                    iconColor: 'darkred'
                                });


                                puntosMunicipio = L.geoJson(data, {
                                    pointToLayer: function (feature, latlng) {
                                        var contenido = ''
                                            + '<b>' + feature.properties.nombre + '</b>'
                                            + '<br><b>Departamento: </b>' + feature.properties.departamento
                                            + '<br><b>Provincia: </b>' + feature.properties.provincia
                                            + '<br><b>Capital: </b>' + feature.properties.capital
                                            // + "<br><a  id='btnref' onclick='return refgrafico(" + '"' + obj.name + '",' + '"' + getAbsolutePath() + "graficos/" + obj.name + '.html"' + ");'><b>Graficos Estadisticos</b></a>"
                                            + "<br><br><a  id='btnref' href='" + getAbsolutePath() + "graficos/" + obj.name + ".html'" + "' target='_blank'><b>Graficos Estadisticos</b></a>"
                                            + '';


                                        var marker = L.marker(latlng, { icon: ratIcon });
                                        marker.bindLabel(feature.properties.nombre);
                                        marker.bindPopup(contenido);
                                        marker.addEventListener('click', function (e) {
                                            map.setView(e.latlng);
                                        });
                                        return marker;
                                    }
                                }).addTo(map);
                                map.fitBounds(puntosMunicipio.getBounds());
                            });
                        }
                        enableMap();
                    }
                }
            }
            var puntos = [];
            if (markersTematicos.hasOwnProperty(obj.name)) {
                puntos = markersTematicos[obj.name];
                for (var o in markersTematicos[obj.name]) {
                    o = markersTematicos[obj.name][o];
                    map.addLayer(o);
                }
            } else {
                for (var o in obj.layer._layers) {
                    o = obj.layer._layers[o];
                    if (o.feature.properties.nombre) {
                        var center = o.getBounds().getCenter();
                        var etiqueta = L.marker(center, {
                            icon: L.divIcon({
                                iconSize: null,
                                className: 'label',
                                html: '<div>' + o.feature.properties.nombre + '</div>'
                            })
                        });
                        etiqueta.addTo(map);
                        puntos.push(etiqueta);
                    }
                }
                markersTematicos[obj.name] = puntos;
            }
            nombreTematico = obj.name;
            geojson = obj.layer;
            geojsonTematicos[obj.name] = obj.layer;
            break;

        // case 'Distritos':
        case 'Municipio de Santa Cruz':
            if (obj.name == 'Limites de Distrito') {
                var puntos = [];
                if (markersTematicos.hasOwnProperty(obj.name)) {
                    puntos = markersTematicos[obj.name];
                    for (var o in markersTematicos[obj.name]) {
                        o = markersTematicos[obj.name][o];
                        map.addLayer(o);
                    }
                } else {
                    for (var o in obj.layer._layers) {
                        o = obj.layer._layers[o];
                        if (o.feature.properties.nombre) {
                            var center = o.getBounds().getCenter();
                            var etiqueta = L.marker(center, {
                                icon: L.divIcon({
                                    iconSize: null,
                                    className: 'label',
                                    html: '<div>' + o.feature.properties.nombre + '</div>'
                                })
                            });
                            etiqueta.on('click', function (event) {
                                map.fitBounds(event.getBounds());
                            });
                            etiqueta.addTo(map);
                            puntos.push(etiqueta);
                        }
                    }
                    markersTematicos[obj.name] = puntos;
                }
                nombreTematico = obj.name;
                geojsonDistrito = obj.layer;
            } else {
                if (obj.layer._layers) {
                    nombreTematico = obj.group.name;
                    nombreDistrito = obj.name;
                    geojsonDistrito = obj.layer;
                } else {
                    map.setView([-17.78361, -63.18212], 13);
                }
            }
            break;
        default:
            controlSearch._layer = obj.layer;
            searchcluster.addLayer(obj.layer);
            if (!geojsonPtosInteres.hasOwnProperty(obj.name)) {
                geojsonPtosInteres[obj.name] = obj.layer;
                var aa = Object.keys(geojsonPtosInteres);
                console.info("geojsonPtosInteres", aa);
                console.info("geojsonPtosInteres", aa.length);
            }

            $(".leaflet-control-search").css("display", "initial");
            break;
    }
}

function tematicoUnSelect(obj) {
    switch (obj.group.name) {
        case "Mapas Base":
            // console.info("mapas base unSelect", obj.group.name);
            break;
        case 'Categorias':
            searchcluster.removeLayer(obj.layer);
            searchcluster.addTo(map);
            controlSearch._layer = searchcluster;
            break;
        // case 'Tematicos':
        case 'Cartografia Nacional':
            if (obj.name == "Departamento") {
                map.removeLayer(puntosDepartamento);
            } else {
                if (obj.name == "Provincias") {
                    map.removeLayer(puntosProvincia);
                } else {
                    if (obj.name == "Municipios") {
                        map.removeLayer(puntosMunicipio);
                    }
                }
            }
            if (markersTematicos.hasOwnProperty(obj.name)) {
                var puntos = markersTematicos[obj.name];
                for (var o in markersTematicos[obj.name]) {
                    o = markersTematicos[obj.name][o];
                    map.removeLayer(o);
                }
            }
            if (geojsonTematicos.hasOwnProperty(obj.name)) {
                delete geojsonTematicos[obj.name];
            }

            if (Object.keys(geojsonTematicos).length <= 0) {
                geojson = null;
                nombreTematico = 'Descripcion';
                legend._container.style.visibility = 'hidden';
                info._container.style.visibility = 'hidden';
            }
            break;
        // case 'Distritos':
        case 'Municipio de Santa Cruz':
            if (obj.name == 'Limites de Distrito') {
                if (markersTematicos.hasOwnProperty(obj.name)) {
                    var puntos = markersTematicos[obj.name];
                    for (var o in markersTematicos[obj.name]) {
                        o = markersTematicos[obj.name][o];
                        map.removeLayer(o);
                    }
                }
                if (geojsonTematicos.hasOwnProperty(obj.name)) {
                    delete geojsonTematicos[obj.name];
                }

                if (Object.keys(geojsonTematicos).length <= 0) {
                    geojsonDistrito = null;
                    nombreTematico = 'Descripcion';
                    legend._container.style.visibility = 'hidden';
                    info._container.style.visibility = 'hidden';
                }
            } else {
                info._container.style.visibility = 'hidden';
            }
            break;
        default:
            searchcluster.removeLayer(obj.layer);
            if (geojsonPtosInteres) {
                delete geojsonPtosInteres[obj.name];
                var dimPtos = Object.keys(geojsonPtosInteres);
                if (dimPtos.length > 0) {
                    var layerPtos = geojsonPtosInteres[dimPtos[dimPtos.length - 1]];
                    console.info("layerPtos", layerPtos);
                    searchcluster.addLayer(layerPtos);
                    controlSearch._layer = layerPtos;
                } else {
                    controlSearch._layer = searchcluster;
                    $(".leaflet-control-search").css("display", "none");
                }
            } else {
                $(".leaflet-control-search").css("display", "none");
            }
            searchcluster.addTo(map);
            break;
    }
}
