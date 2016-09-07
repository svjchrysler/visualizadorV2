
/**
 * ************************************************************************************************************************************************
 * ************************************************************************************************************************************************
 * ************************************************************************************************************************************************
 * CATEGORIAS GEOJSON
 * ************************************************************************************************************************************************
 * ************************************************************************************************************************************************
 */
var maxZoomCluster=11;
/**
 * FARMACIAS
 */
      var clustersfarmacias = L.markerClusterGroup({ disableClusteringAtZoom: maxZoomCluster });
          
      $.getJSON("datos/points/farmacias.geojson", function (data) {
          var ratIcon = L.icon({
              iconUrl: 'image/icons/hospital-marker.svg',
              iconSize: [20, 20]              
          });
          var farmacias= L.geoJson(data, {
              pointToLayer: function (feature, latlng) {
                  var contenido=''
                  +'<b>'+feature.properties.NOMBREREF+'</b>'
                  +'<br><br><b>DISTRITO</b> '+feature.properties.DISTRITO
                  +' / '+feature.properties.UV
                  +'<br><b>BARRIO</b> '+feature.properties.BARRIO
                //   +'<br><br><b>Descripcion:</b>'+feature.properties.DESCRIPCIO
                //   +'<br><br><b>Ente Econonomico:</b>'+feature.properties.ENTECONOMICO
                  +'';
                  var marker = L.marker(latlng, { icon: ratIcon ,tags:['DISTRITO '+feature.properties.DISTRITO]});
                  marker.bindLabel(feature.properties.NOMBREREF);
                  marker.bindPopup(contenido);
                  marker.addEventListener('click',function(e){
                      document.getElementById('coord').innerHTML=
                      e.latlng;
                    //   "Coordenadas (X:"+e.latlng.lat+" ; Y:"+e.latlng.lng+" )";
                  });
                  return marker;
              }
          });
          clustersfarmacias.addLayer(farmacias);
        //   map.addLayer(clustersfarmacias);
            // searchcluster.addLayer(farmacias);
      });          

/**
 * HOSPITALES
 */
      var clustershospitales = L.markerClusterGroup({ disableClusteringAtZoom: maxZoomCluster });
          
      $.getJSON("datos/points/hospitales.geojson", function (data) {
          var ratIcon = L.icon({
              iconUrl: 'image/icons/hospital.svg',
              iconSize: [12, 12]
          });
          var hospitales= L.geoJson(data, {
              pointToLayer: function (feature, latlng) {
                   var contenido=''
                    +'<b>'+feature.properties.NOMBREREF+'</b>'
                    +'<br><br><b>DISTRITO</b> '+feature.properties.DISTRITO
                    +' / '+feature.properties.UV
                    +'<br><b>BARRIO</b> '+feature.properties.BARRIO
                    +'';
                  var marker = L.marker(latlng, { icon: ratIcon,tags:['DISTRITO '+feature.properties.DISTRITO] });
                  marker.bindLabel(feature.properties.NOMBREREF);
                  marker.bindPopup(contenido);
                  marker.addEventListener('click',function(e){
                      document.getElementById('coord').innerHTML=
                      e.latlng;
                    //   "Coordenadas (X:"+e.latlng.lat+" ; Y:"+e.latlng.lng+" )";
                  });
                  return marker;
              }
          });
          clustershospitales.addLayer(hospitales);
        //   map.addLayer(clusters);
            // searchcluster.addLayer(farmacias);
      });   

/**
 * FINANCIERAS
 */
    var clustersfinancieras = L.markerClusterGroup({disableClusteringAtZoom:maxZoomCluster});
          
    $.getJSON("datos/points/financieras.geojson", function (data) {
          var ratIcon = L.icon({
              iconUrl: 'image/icons/bank-marker.svg',
              iconSize: [25,25]
          });
          var financieras = L.geoJson(data, {
              pointToLayer: function (feature, latlng) {
                  
                  var marker = L.marker(latlng, { icon: ratIcon,tags:['DISTRITO '+feature.properties.DISTRITO] });
                  marker.bindLabel(feature.properties.NOMBREREF);
                  marker.bindPopup("<b>"+feature.properties.NOMBREREF+"</b>");
                  
                  return marker;
              }
          });
        //   console.log(financieras);
          clustersfinancieras.addLayer(financieras);
        //   map.addLayer(clusters);
        // searchcluster.addLayer(financieras);
      });


/**
 * HOTELES
 */
 
 var clustershoteles = L.markerClusterGroup({ disableClusteringAtZoom: maxZoomCluster });
      $.getJSON("datos/points/hoteles.geojson", function (data) {
          var ratIcon = L.icon({
              iconUrl: 'image/icons/building-location.svg',
              iconSize: [22, 22]
          });
           var hoteles= L.geoJson(data, {
              pointToLayer: function (feature, latlng) {
                  var contenido=''
                    +'<b>'+feature.properties.NOMBREREF+'</b>'
                    +'<br><br><b>DISTRITO</b> '+feature.properties.DISTRITO
                    +' / '+feature.properties.UV
                    +'<br><b>BARRIO</b> '+feature.properties.BARRIO
                    +'';
                  
                  var marker = L.marker(latlng, { icon: ratIcon,tags:['DISTRITO '+feature.properties.DISTRITO] });
                  marker.bindLabel(feature.properties.NOMBREREF);
                  marker.bindPopup(contenido);
                  marker.addEventListener('click',function(e){
                      document.getElementById('coord').innerHTML=
                      e.latlng;
                    //   "Coordenadas (X:"+e.latlng.lat+" ; Y:"+e.latlng.lng+" )";
                  });
                  return marker;
              }
          });
          clustershoteles.addLayer(hoteles);
        //   map.addLayer(clusters);
            // searchcluster.addLayer(hoteles);
            // console.log(searchcluster);
      });

/**
 * PARQUES  
 */
var clustersparques = L.markerClusterGroup({ disableClusteringAtZoom: maxZoomCluster });
      $.getJSON("datos/points/parques.geojson", function (data) {
          var ratIcon = L.icon({
              iconUrl: 'image/icons/woods-marker.svg',
              iconSize: [25, 25]
          });
          var parques= L.geoJson(data, {
              pointToLayer: function (feature, latlng) {
                  var contenido=''
                    +'<b>'+feature.properties.NOMBREREF+'</b>'
                    +'<br><br><b>DISTRITO</b> '+feature.properties.DISTRITO
                    +' / '+feature.properties.UV
                    +'<br><b>BARRIO</b> '+feature.properties.BARRIO
                    +'';
                  
                  var marker = L.marker(latlng, { icon: ratIcon,tags:['DISTRITO '+feature.properties.DISTRITO] });
                  marker.bindLabel(feature.properties.NOMBREREF);
                  marker.bindPopup(contenido);
                  marker.addEventListener('click',function(e){
                      document.getElementById('coord').innerHTML=
                      e.latlng;
                    //   "Coordenadas (X:"+e.latlng.lat+" ; Y:"+e.latlng.lng+" )";
                  });
                  return marker;
              }
          });
          clustersparques.addLayer(parques);
        //   map.addLayer(clusters);
            // searchcluster.addLayer(parques);
            // console.log(searchcluster);
      });