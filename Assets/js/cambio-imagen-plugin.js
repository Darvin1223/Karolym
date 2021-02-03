const d = document;

export const cambioImagen = (classImg, pantalla) => {
	let imagenes = d.querySelectorAll(`.${classImg}`);
	imagenes.forEach(imagen => {
		let direccion_actual = imagen.getAttribute('src');
		if (pantalla === 'Desktop') {
			imagen.setAttribute('src', direccion_actual.replace('Mobile' || 'tablet', pantalla))
		}
		if (pantalla === 'Mobile') {
			imagen.setAttribute('src', direccion_actual.replace('Desktop' || 'tablet', pantalla))
		}
		if (pantalla === 'tablet') {
			imagen.setAttribute('src', direccion_actual.replace('Mobile' || 'Desktop', pantalla))
		}
	})
}