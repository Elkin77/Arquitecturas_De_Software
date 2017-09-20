$(document).ready(function(){
	$('.contenedorPagina, .contenedorReparto').hide();
	$('.navBar a').click(function(e){
        e.preventDefault()
    });
	$('.btnReparto').click(function () {
        $('.contenedorPagina, .contenedorReparto').fadeIn(1000);
    });
    $('.contenedorPagina').click(function () {
        $('.contenedorPagina, .contenedorReparto').fadeOut(1000);
    });
   /* $('#cerrar').click(function(){
    	$('#advertencia').fadeOut(1000);
    });*/
});