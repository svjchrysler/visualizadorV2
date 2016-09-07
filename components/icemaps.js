
  
// DEFINIENDO MAPAS ICE
		mbUrlICE = 'http://200.119.197.136/santacruz/Z{z}/{y}/{x}.png'; //MAPA ICE HIBRIDO
		mbUrlICEMNZA = 'http://200.119.197.136/santacruz/manzanas/Z{z}/{y}/{x}.png'; //MAPA ICE MANZANAS
		mbUrlICEUVS = 'http://200.119.197.136/santacruz/uvs/Z{z}/{y}/{x}.png'; //MAPA ICE UVS
		mbUrlICEDISTRITOS = 'http://200.119.197.136/santacruz/distritos/Z{z}/{y}/{x}.png'; //MAPA ICE DISTRITOS
		mbUrlICEPREDIOS= 'http://200.119.197.136/santacruz/predios/Z{z}/{y}/{x}.png'; //MAPA ICE PREDIOS
		mbUrlICECALLES = 'http://200.119.197.136/santacruz/calles/Z{z}/{y}/{x}.png'; //MAPA ICE CALLES
		
		ICE = L.tileLayer(mbUrlICE, { id: 'ice.streets', attribution: 'Tiles by <a href="http://www.santacruz.gob.bo">ICE</a>', maxZoom: 17, minZoom: 2, errorTileUrl: 'http://200.119.197.136/santacruz/blank.png' });
		ICEMNZA = L.tileLayer(mbUrlICEMNZA, { id: 'ice.streets', attribution: 'Manzanos de <a href="http://www.santacruz.gob.bo">ICE</a>', maxZoom: 17, minZoom: 2, errorTileUrl: 'http://200.119.197.136/santacruz/blank.png' });
		ICEUVS = L.tileLayer(mbUrlICEUVS, { id: 'ice.streets', attribution: 'Uvs de <a href="http://www.santacruz.gob.bo">ICE</a>', maxZoom: 17, minZoom: 2, errorTileUrl: 'http://200.119.197.136/santacruz/blank.png' });
		ICEPREDIOS = L.tileLayer(mbUrlICEPREDIOS, { id: 'ice.streets', attribution: 'Predios de <a href="http://www.santacruz.gob.bo">ICE</a>', maxZoom: 17, minZoom: 2, errorTileUrl: 'http://200.119.197.136/santacruz/blank.png' });
		ICECALLES = L.tileLayer(mbUrlICECALLES, { id: 'ice.streets', attribution: 'Calles de <a href="http://www.santacruz.gob.bo">ICE</a>', maxZoom: 19, minZoom: 2, errorTileUrl: 'http://200.119.197.136/santacruz/blank.png' });
		ICEDISTRITOS = L.tileLayer(mbUrlICEDISTRITOS, { id: 'ice.streets', attribution: 'Distritos de <a href="http://www.santacruz.gob.bo">ICE</a>', maxZoom: 17, minZoom: 2, errorTileUrl: 'http://200.119.197.136/santacruz/blank.png' });
