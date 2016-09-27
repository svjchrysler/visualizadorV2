

// L.control.slideMenu("<div id='slideInfo'></div>",{position:'topleft',delay:'30'}).
var slideMenu=L.control.slideMenu(
    // "<img id='slideInfo' src='distrito/2/ficha_D2_1.jpg'>",
    // "<iframe  id='frameSlideInfo' name='frameSlideInfo' src='informacion.html' width='100%' height='95%'></iframe>", 
    // "<div id='informacion' width='100%' height='95%' style='margin-left:5px'></div>",
    "<div id='informacion' width='100%' height='95%' style='margin-left:5px'></div>",
        { 
            position: 'topleft', 
            delay: '7',
            width:'360px',
        });
        
        slideMenu.addTo(map);

$(function() {
$("#informacion").load("menuLV3.html"); 
}); 