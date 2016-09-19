function iconByName(name) {
	return '<i class="icon icon-' + name + '"></i>';
}



var baseLayers = [
	{
		groupName: "Mapas Base",
		expanded: false,
		layers: {
			"Blank": BLANK,
			"Mapbox": mbgrayscale,
			"Satelite": gmapsatellite,
			"OSM": OS,
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
	// {
	// 	// groupName: "Tematicos",
	// 	groupName: "Cartografia Nacional",
	// 	expanded: false,
	// 	layers: {

	// 		// "Departamento": L.geoJson(exp_departamento,
	// 		// 	            {
	// 		// 	                style: styleFeature,
	// 		// 	                onEachFeature: onEachFeature,
	// 		// 	            }),
	// 		// "Provincia": L.geoJson(exp_provincia,
	// 		// 	{
	// 		// 		style: styleFeature,
	// 		// 		onEachFeature: onEachFeature,
	// 		// 	}),
	// 		// "Municipio": L.geoJson(exp_municipio,
	// 		// 	            {
	// 		// 	                style: styleFeature,
	// 		// 	                onEachFeature: onEachFeature,
	// 		// 	            }),
	// 	}
	// },
	{
		groupName: "Cartografia Nacional",
		expanded: false,
		layers: {
			"Departamento": ICEDEPARTAMENTOS,
			"Provincias": ICEPROVINCIA,
			"Municipios": ICEMUNICIPIO,
			"Rios": ICERIOS,
			"Caminos": ICECAMINOS,
		}
	},
	{
		// groupName: "Distritos",
		groupName: "Ciudad de Santa Cruz",
		expanded: false,
		layers: {
			// "Limites de Distrito": L.geoJson(exp_distritos,
			// 	            {
			// 	                style: function (feature) {
			// 			return {
			// 				fillColor: '#EB7E37',
			// 				weight: 2,
			// 				opacity: 1,
			// 				color: 'white',
			// 				dashArray: '3',
			// 				fillOpacity: 0.4
			// 			};
			// 		},
			// 	                onEachFeature: onEachFeatureDistritos,
			// 	            }),
			// "Santa Cruz":ICESANTACRUZ,
			// "Distritos":ICEDISTRITOS,
			// "UVs": ICEUVS,
			"Manzanos": ICEMNZA,
			"Calles": ICECALLES,
			// "Distrito 01": L.geoJson(exp_distrito1,
			// 	{
			// 		style: function (feature) {
			// 			return {
			// 				fillColor: '#EB7E37',
			// 				weight: 2,
			// 				opacity: 1,
			// 				color: 'white',
			// 				dashArray: '3',
			// 				fillOpacity: 0.4
			// 			};
			// 		},
			// 		onEachFeature: onEachFeatureDistritos,
			// 	}),
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
				container_width: "200px",
				group_maxHeight: "400px",
				// container_maxHeight : "350px", 
				exclusive: false,
				collapsed: false,
				position: 'topright'
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
// map.addLayer(BLANK);
map.addLayer(mbgrayscale);
// map.addLayer(ICEMNZA);

// map.addLayer(clustershospitales);
// var popup = L.popup()
// 			.setLatLng([-17.78361, -63.18212])
// 			.setContent("The data that appears in this application are fictitious and do not represent actual data!")
// 			.openOn(map);



/**
 * Evento persoalizado para 
 * mostrar el menu de agregar capas
 */
// var lab="0";
// $('.menu').click(function (e) {
// 	// console.info("jquery click menu",e);
// 	// console.info("jquery click menu - ",e.currentTarget);
// 	// console.info("jquery click menu - id ",e.currentTarget.id);
// 	// var lab = e.currentTarget.id;
// 	// console.info(lab);

// 	// var textlab = $("label[for='" + lab + "']").text();
// 	// console.info(textlab);
// 	var menuleafl = document.getElementsByClassName('leaflet-menu');
// 	if (menuleafl[0].style.left == '0px' && lab!=e.currentTarget.id) {
// 		lab=e.currentTarget.id;
// 		menuleafl[0].style.left = '-400px';
// 	} else {
// 		menuleafl[0].style.left = '0px';
// 	}
// 	//  menuleafl.style.left='0px';
// 	//  $(this).next().text();
// });
