var overlay = L.WMS.overlay("http://example.com/mapserv", {
    'layers': 'layer1,layer2',
    'transparent': true
});
overlay.addTo(map);