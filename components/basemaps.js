//DEFINIENDO MAPAS BASE
      ARCGIS_AERIALurl = 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.jpg';
      ARCGIS_HYBRID2url = 'http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}.png';
      ARCGIS_STREETurl = 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.jpg';
      ARCGIS_TOPO_WORLDurl = 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.jpg';
      OPENCICLEurl = 'http://tile.opencyclemap.org/cycle/{z}/{x}/{y}.png';
      OPENSEAMAP_MAPQUESTurl = 'http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg';
      OPENSEAMAPurl = 'http://tile.openstreetmap.org/{z}/{x}/{y}.png';
      OPENTOPOMAPurl = 'http://opentopomap.org/{z}/{x}/{y}.png';
      THUNDERFOREST_LANDSCAPEurl = 'http://tile.thunderforest.com/landscape/{z}/{x}/{y}.png';
      THUNDERFOREST_OUTDOORSurl = 'http://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png';
      THUNDERFOREST_TRANSPORTurl = 'http://tile.thunderforest.com/transport/{z}/{x}/{y}.png';
      US_COUNTIES_OSMurl = 'http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg';
      US_NATIONAL_ATLASurl = 'http://basemap.nationalmap.gov/ArcGIS/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}';
      mbUrlMapbox = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw'; //mAPBOX
      mbUrlCartoL = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'; //CARTODB
      mbUrlOpenstreet = 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'; //OPEN CYCLE
      mbUrlCartoD = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'; //CARTODB
      mbUrlNubes = 'https://dnv9my2eseobd.cloudfront.net/v3/cartodb.map-4xtxp73f/{z}/{x}/{y}.png'; //WEATHER Nubes
      mbUrlLluvia = 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s={s}'; //WEATHER lluvia
      mbUrlOS = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'; //OPEN STREET lluvia
      mbUrlGOO = 'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'; //GOOGLE ?


		grayscale = L.tileLayer(mbUrlMapbox, { id: 'mapbox.light', attribution: 'Tiles by <a href="http://mapc.org">MapBox</a>	 ' });
		streets = L.tileLayer(mbUrlMapbox, { id: 'mapbox.streets', attribution: 'Tiles by <a href="http://mapc.org">MapBox</a>	' });
		cartoLuz = L.tileLayer(mbUrlCartoL, { id: 'mapbox.streets', attribution: 'Tiles by <a href="http://mapc.org">CartoDB</a>	' });
		cartoNoche = L.tileLayer(mbUrlCartoD, { id: 'mapbox.streets', attribution: 'Tiles by <a href="http://mapc.org">CartoDB</a>	' });
		opemst = L.tileLayer(mbUrlOpenstreet, { id: 'mapbox.streets', attribution: 'Tiles by <a href="http://mapc.org">opencyclemap</a>	' });
		nubes = L.tileLayer(mbUrlNubes, { id: 'mapbox.streets', attribution: 'Tiles by <a href="http://mapc.org">CLOUD FRONT</a>	' });
		lluvia = L.tileLayer(mbUrlLluvia, { id: 'mapbox.streets', attribution: 'Tiles by <a href="http://mapc.org">Google</a>	' });
		OS = L.tileLayer(mbUrlOS, { id: 'mapbox.streets', attribution: 'Tiles by <a href="http://mapc.org">OpenStreetMap</a>' });
		GO = L.tileLayer(mbUrlGOO, { id: 'mapbox.streets', attribution: 'Tiles by <a href="http://mapc.org">ARCGIS</a>' });
		ICEARCGIS_AERIALurl = L.tileLayer(ARCGIS_AERIALurl, { id: 'ice.ARCGIS_AERIALurl', attribution: 'Tiles by ARCGIS' });
		ICEARCGIS_HYBRID2url = L.tileLayer(ARCGIS_HYBRID2url, { id: 'ice.ARCGIS_HYBRID2url', attribution: 'Tiles by ARCGIS' });
		ICEARCGIS_STREETurl = L.tileLayer(ARCGIS_STREETurl, { id: 'ice.ARCGIS_STREETurl', attribution: 'Tiles by ARCGIS' });
		ICEARCGIS_TOPO_WORLDurl = L.tileLayer(ARCGIS_TOPO_WORLDurl, { id: 'ice.ARCGIS_TOPO_WORLDurl', attribution: 'Tiles by ARCGIS' });
		ICEOPENCICLEurl = L.tileLayer(OPENCICLEurl, { id: 'ice.OPENCICLEurl', attribution: 'Tiles by OPENCICLE' });
		ICEOPENSEAMAP_MAPQUESTurl = L.tileLayer(OPENSEAMAP_MAPQUESTurl, { id: 'ice.OPENSEAMAP_MAPQUESTurl', attribution: 'Tiles by OPENTOPOMAP' });
		ICEOPENSEAMAPurl = L.tileLayer(OPENSEAMAPurl, { id: 'ice.OPENSEAMAPurl', attribution: 'Tiles by OPENTOPOMAP' });
		ICEOPENTOPOMAPurl = L.tileLayer(OPENTOPOMAPurl, { id: 'ice.OPENTOPOMAPurl', attribution: 'Tiles by OPENTOPOMAP' });
		ICETHUNDERFOREST_LANDSCAPEurl = L.tileLayer(THUNDERFOREST_LANDSCAPEurl, { id: 'ice.THUNDERFOREST_LANDSCAPEurl', attribution: 'Tiles by THUNDERFOREST' });
		ICETHUNDERFOREST_OUTDOORSurl = L.tileLayer(THUNDERFOREST_OUTDOORSurl, { id: 'ice.THUNDERFOREST_OUTDOORSurl', attribution: 'Tiles by THUNDERFOREST' });
		ICETHUNDERFOREST_TRANSPORTurl = L.tileLayer(THUNDERFOREST_TRANSPORTurl, { id: 'ice.THUNDERFOREST_TRANSPORTurl', attribution: 'Tiles by THUNDERFOREST' });
		ICEUS_COUNTIES_OSMurl = L.tileLayer(US_COUNTIES_OSMurl, { id: 'ice.US_COUNTIES_OSMurl', attribution: 'Tiles by mqcdn.com' });
