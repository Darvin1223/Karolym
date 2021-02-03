// El script espera a que todo se cargue para actuar.
import { cambioImagen } from './cambio-imagen-plugin.js';

document.addEventListener("DOMContentLoaded", () => {
    /** Script para hacer la pagina resposive **/

    // Declarando los media query.
    const mql_tablet = matchMedia("(min-width: 48rem)"),
          mql_desktop = matchMedia("(min-width: 63.938rem)");


    // Manejo del DOM.
    window.addEventListener('resize', e => {
        if (mql_desktop.matches) {
            cambioImagen('cb-img', 'Desktop')
        }

        if (mql_tablet.matches) {
            cambioImagen('cb-img', 'tablet')
        }
    })

});