// // Jquery
$(document).ready(main);

var contador = 1;
 

function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
		console.log("Funciona?");
 
		if(contador == 1){
			$('nav').animate({
				'left': '0'
            });
            $('nav').css({
				'max-height':'370px',
				'width':'18rem'
			});
		
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
			
			
		}
 
	});
 
};  