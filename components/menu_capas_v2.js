function iconByName(name) {
	return '<i class="icon icon-'+name+'"></i>';
}
    


var baseLayers = [
		{
			groupName:"Mapas Base",
			expanded:false,
			layers:{ 
						"Blank": BLANK,
						"Mapbox" :  grayscale,
						"Satelite"  :  lluvia,
						"OSM"   :  OS,
					}
		}
	];


var overLayers = [
		
		// {
		// 	groupName: "Capas",
		// 	expanded: false,
		// 	layers: { 
		// 			// "Distritos" : ICEDISTRITOS,
		// 			"UVs" 	 : ICEUVS,
		// 			"Manzanos":ICEMNZA,
		// 			"Calles":ICECALLES
		// 			// "Predios":ICEPREDIOS,
		// 		}	
		// },
		{
			// groupName: "Tematicos",
			groupName: "Division Politica",
			expanded: false,
			layers:{ 
					
						"Departamento" :  L.geoJson(exp_departamento,
				            {
				                style: style,
				                onEachFeature: onEachFeature,
				            }),
						"Provincia" :  L.geoJson(exp_provincia,
						{
							style: style,
							onEachFeature: onEachFeature,
						}),
						"Municipio"  :  L.geoJson(exp_municipio,
				            {
				                style: style,
				                onEachFeature: onEachFeature,
				            }),					
			}
		},
		{
			// groupName: "Distritos",
			groupName: "Ciudad de Santa Cruz",
			expanded: false,
			layers:{
				"Limites de Distrito"   :  L.geoJson(exp_distritos,
				            {
				                style: function (feature) {
									    return {
									        fillColor: '#EB7E37',
									        weight: 2,
									        opacity: 1,
									        color: 'white',
									        dashArray: '3',
									        fillOpacity: 0.4
									    };
									},
				                onEachFeature: onEachFeatureDistritos,
				            }),
					"UVs" 	 : ICEUVS,
					"Manzanos":ICEMNZA,
					"Calles":ICECALLES,
					"Distrito 01"   :  L.geoJson(exp_distrito1,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 02"   :  L.geoJson(exp_distrito2,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 03"   :  L.geoJson(exp_distrito3,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 04"   :  L.geoJson(exp_distrito4,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 05"   :  L.geoJson(exp_distrito5,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 06"   :  L.geoJson(exp_distrito6,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 07"   :  L.geoJson(exp_distrito7,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 08"   :  L.geoJson(exp_distrito8,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 09"   :  L.geoJson(exp_distrito9,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 10"   :  L.geoJson(exp_distrito10,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 11"   :  L.geoJson(exp_distrito11,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 12"   :  L.geoJson(exp_distrito12,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 13"   :  L.geoJson(exp_distrito13,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 14"   :  L.geoJson(exp_distrito14,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 15"   :  L.geoJson(exp_distrito15,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 16"   :  L.geoJson(exp_distrito16,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						"Distrito 17"   :  L.geoJson(exp_distrito17,
						{
							style: function (feature) {
									return {
										fillColor: '#EB7E37',
										weight: 2,
										opacity: 1,
										color: 'white',
										dashArray: '3',
										fillOpacity: 0.4
									};
								},
							onEachFeature: onEachFeatureDistritos,
						}),
						
				}
		},
		// {
		// 	groupName:"Categorias",
		// 	expanded:false,
		// 	layers:{ 
		// 			"Farmacias" : clustersfarmacias,
		// 			"Hospitales" 	 : clustershospitales,
		// 			"Hoteles":clustershoteles,
		// 			"Parques":clustersparques
		// 		}
		// },

];

/**
 * Definiendo las opciones
 */
var options = {
				container_width 	: "200px",
				group_maxHeight     : "300px",
				// container_maxHeight : "350px", 
				exclusive       	: false,
				collapsed 			: false, 
				position			: 'topright'
			};


var controlStyledLayer = L.Control.styledLayerControl(baseLayers, overLayers, options);
map.addControl(controlStyledLayer);

// controlStyledLayer.selectLayer(clusterhospitales);


// How to add and remove layers and groups dynamically ?

// To add a new base layer dynamically, simply use addBaseLayer and declare that the group layer will belong. Also note that to add a new group, simply specify a group name that does not exist yet, and a new group will be created.
//     control.addBaseLayer( bing1, "Bing Satellite", {groupName : "Bing Maps", expanded: true} );
//     control.addBaseLayer( bing2, "Bing Road", {groupName : "Bing Maps"} );
// To add a new overlay layer dynamically, simply declare the group that de layer will belong.
//     control.addOverlay( corn_bh, "Corn Plant", {groupName : "Belo Horizonte"} );
// To remove a layer dynamically, specify the instance variable of the layer using the method removeLayer. (the method ignore the removable property of layers )
//     control.removeLayer( corn_sp );
// To remove a group, specify the name of the group in the removeGroup method. By doing so all layers belonging to the group will also be excluded
//     control.removeGroup( "Rio de Janeiro");
// How to select and unSelect layers dynamically ?

// To force select a layer dynamically, simply use selectLayer function like this :
//     control.selectLayer( corn_sp );
// So.. to un-select the layer :
//     control.unSelectLayer( corn_sp );
// How to select and unSelect group layers dynamically ?

// To force select all layer of a group, use like this :
//     control.selectGroup( "Rio de Janeiro" );
// So.. to un-select the all layer of group :
//     control.unSelectGroup( "Rio de Janeiro" );


/**
 * Agregando opciones de eliminacion de la capa
 */
// clustersfarmacias.StyledLayerControl = {
// 				removable : true,
// 				visible : true
// 			}


// map.addLayer(OS);
map.addLayer(BLANK);
map.addLayer(ICEMNZA);
// map.addLayer(clustershospitales);
// var popup = L.popup()
// 			.setLatLng([-17.78361, -63.18212])
// 			.setContent("The data that appears in this application are fictitious and do not represent actual data!")
// 			.openOn(map);