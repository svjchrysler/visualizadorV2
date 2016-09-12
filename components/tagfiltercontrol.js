var tagsSearch=['Ninguno','DISTRITO 01','DISTRITO 02','DISTRITO 03','DISTRITO 11'];
var filterControl=L.control.tagFilterButton({
    data:tagsSearch,
    icon:'<i class="fa fa-filter fa-2x" aria-hidden="true" style="margin-left:-4px"></i>',
    clearText: 'Desmarcar',
    onSelectionComplete: function(tags){
        // console.info('tagFilterButton - tags',tags);
        
        // this.resetCaches(true);
        console.info('tagFilterButton-hasFiltered',this.hasFiltered());
    }
});

// filterControl.addTo(map);
