

// // Jquery
 $(document).ready(main);

var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
 
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


// // DOM LOADEED
// document.addEventListener('DOMContentLoaded',()=> {
// 	// let ancho = screen.width;
// 	// let altura = screen.height;
// 	// console.log(`la altura es: ${altura}`);
// 	// console.log(`El ancho es: ${ancho}`);
	
// 	// Contacto - formulario
// 	let formulario = document.getElementById("formulario");

// 	formulario.addEventListener("submit",function(e){
// 		e.preventDefault();
// 		let Nombre= document.getElementById('Nombre').value,
// 		Telefono = document.getElementById('Numero').value,
// 		Correo = document.getElementById('Correo').value,
// 		Mensaje = document.getElementById('Mensaje').value;


// 		let Datos = {
//             Nombre:` ${Nombre}`,
//             Telefono: `${Telefono}`,
//             Correo: `${Correo}`,
//             Mensaje: `${Mensaje}`
// 		};
				
// 		fetch("/formulario", {
//       	method: 'POST',
//       	headers: [ 
// 			  ["Content-Type", "application/json"]
// 			 ],
// 			 credentials: "include",
//       	body: JSON.stringify(Datos),
// 			});
// 			// .then(data => {
// 			// 		return data.JSON();
// 			// 	}).then( data => {
// 			// 		console.log("klk manito esto es lo que llega del Back ", data);
// 			// 	});
	
	
// 		console.log(Datos);
// 	});
	

	
// });