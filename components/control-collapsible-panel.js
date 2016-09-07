


//*******************************************************************************



function iconByName(name) {
	return '<i class="icon icon-'+name+'"></i>';
}

// function featureToMarker(feature, latlng) {
// 	return L.marker(latlng, {
// 		icon: L.divIcon({
// 			className: 'marker-health',
// 			html: iconByName('health'),
// 			iconUrl: '../image/icons/cancel.svg',
// 			iconSize: [25, 41],
// 			iconAnchor: [12, 41],
// 			popupAnchor: [1, -34],
// 			shadowSize: [41, 41]
// 		})
// 	});
// }

 
      
var baseLayers = [
		{
			group:"Mapas Base",
			layers:[
				{
					name: "Mapbox",
					// icon: iconByName('cancel'),
					layer:grayscale
				},
				{
					name: "Satelite",
					// icon: iconByName(''),
					layer:lluvia
				},
				{
					name: "OSM",
					// icon: iconByName(''),
					layer:OS
				},
				{
					name: "CLOUD",
					// icon: iconByName(''),
					layer:nubes
				},
				
			],
		},{
			group: "Tematicos",
			collapsed: true,
			layers: [
				{
					name: "Provincia",
					// icon: iconByName('cancel'),
					// layer:provinciaData
					layer:L.geoJson(exp_provincia,
				            {
				                style: style,
				                onEachFeature: onEachFeature,
				            })
					
				},
				{
					name: "Municipio",
					// icon: iconByName('cancel'),
					// layer:municipioData
					layer:L.geoJson(exp_municipio,
				            {
				                style: style,
				                onEachFeature: onEachFeature,
				            })
				},
				{
					name: "Distrito",
					// icon: iconByName('cancel'),
					// layer:municipioData
					layer:L.geoJson(exp_distritos,
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
				                onEachFeature: onEachFeature,
				            })
				},
			]
		},
		
  ];


var overLayers = [
		
		{
			group:"Categorias",
			collapsed:true,
			layers:[
				{
					name: "Farmacias",
					icon: iconByName('farmacia'),
					layer:clustersfarmacias
				},
				{
					name: "Hospitales",
					icon: iconByName('hospital'),
					layer:clusterhospitales
				},
				{
					name: "Hoteles",
					icon: iconByName('hotel'),
					layer:clustershoteles
				},
				{
					name: "Parques",
					icon: iconByName('parque'),
					layer:clustersparques
				},
				// {
				// 	name: "Financieras",
				// 	icon: iconByName('financiera'),
				// 	layer:clustersfinancieras
				// },
			],
		},
		{
			group: "Capas",
			collapsed: true,
			layers: [
				{
					name: "Distritos",
					// icon: iconByName('cancel'),
					layer:ICEDISTRITOS
				},
				{
					name: "UVs",
					// icon: iconByName('cancel'),
					layer:ICEUVS
				},
				{
					name: "Manzanos",
					// icon: iconByName('cancel'),
					layer:ICEMNZA
				},
				{
					name: "Predios",
					// icon: iconByName('cancel'),
					layer:ICEPREDIOS
				},
				{
					name: "Calles",
					// icon: iconByName('cancel'),
					layer:ICECALLES
				},
				
			]
		}
	// {
	// 	name: "Parking",
	// 	icon: iconByName('parking'),
	// 	layer: L.geoJson(Parking, {pointToLayer: featureToMarker })
	// }	
];


// var overLayers = {
//         //   "Santa Cruz": ICE,

//           "Distritos": ICEDISTRITOS,
//           "UVs": ICEUVS,

//           "Manzanos": ICEMNZA,
//           "Predios": ICEPREDIOS,
//           "Calles": ICECALLES,
          
//         	"Farmacias":clustersfarmacias,
//         	"Financieras":clustersfinancieras	
          
          
//       };

var panelLayers = new L.Control.PanelLayers(baseLayers, overLayers, {collapsed: false,collapsibleGroups: true});

map.addControl(panelLayers);

// panelLayers._overlaysList.onclick(){
// 	console.log("hola mundo");
// };
// console.log(panelLayers._overlaysList.onclick);
