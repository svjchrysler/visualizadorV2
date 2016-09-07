    var optionsFuseSearch = {
        position: 'topright',
        title: 'Buscar...',
        placeholder: 'ex: farmacia,hospital,etc..',
        maxResultLength: 15,
        threshold: 0.5,
        showInvisibleFeatures: true,
        showResultFct: function(feature, container) {
            props = feature.properties;
            var name = L.DomUtil.create('b', null, container);
            name.innerHTML = props.nom_comple;

            container.appendChild(L.DomUtil.create('br', null, container));

            var cat = props.NOMBREREF ? props.NOMBREREF : '....',
                info = '' + cat + ', ' + props.BARRIO;
            container.appendChild(document.createTextNode(info));
        }
    };
    var fuseSearchCtrl = L.control.fuseSearch(optionsFuseSearch);
    // fuseSearchCtrl.indexFeatures(clustersfarmacias,['NOMBREREF']);
    map.addControl(fuseSearchCtrl);
    
    // var fuseSearch=L.control.fuseSearch();
    // fuseSearch.addTo(map);