 var sidebar = L.control.sidebar('sidebar', {
            closeButton: true,
            position: 'left'
        });
        map.addControl(sidebar);

        map.on('click', function () {
            sidebar.hide();
        })

        setTimeout(function () {
            sidebar.setContent("<iframe id='frameSlideInfo' name='frameSlideInfo' src='informacion.html' width='98%' height='95%'></iframe>");
            sidebar.show();
        }, 400);


        // sidebar.on('show', function () {
        //     console.log('Sidebar will be visible.');
        // });

        // sidebar.on('shown', function () {
        //     console.log('Sidebar is visible.');
        // });

        // sidebar.on('hide', function () {
        //     console.log('Sidebar will be hidden.');
        // });

        // sidebar.on('hidden', function () {
        //     console.log('Sidebar is hidden.');
        // });

        // L.DomEvent.on(sidebar.getCloseButton(), 'click', function () {
        //     console.log('Close button clicked.');
        // });

var win =  L.control.window(map,{title:'',content:'',maxWidth:800,maxHeight:300,modal:false});

function referencia(filename){
    // console.info("filename",filename);
    sidebar.setContent("<iframe  id='frameSlideInfo' name='frameSlideInfo' src='ficha/"+filename+".html' width='98%' height='95%'></iframe>");
    sidebar.toggle();
    //  setTimeout(function () {
    //         sidebar.show();
    //     }, 500);
}

function refgrafico(title,src){
    win.title("<h2><center>Graficos Estadisticos</center></h2>")
        .content("<iframe  id='frameSlideInfo' src='"+src+"'></iframe>")
        .show();

}


