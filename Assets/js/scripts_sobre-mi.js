// El script espera a que todo se cargue para actuar.
document.addEventListener("DOMContentLoaded", () => {
    /** Script para hacer la pagina resposive **/

    // Declarando los media query.
    const mql_tablet = matchMedia("(min-width: 48rem)"),
        mql_desktop = matchMedia("(min-width: 63.938rem)");


    // Manejo del DOM.

    // Selecionando elementos del DOM
    let img_sobre_mi = document.querySelector(".img-sobre-mi"),
        logo_sobre_mi = document.querySelector('.logo-sobre-mi');

    const defauld = () => {
        img_sobre_mi.setAttribute('src', '../img/Mobile/Karolyn-Guzman-del-Rosario-editada-celular.jpg');
        logo_sobre_mi.setAttribute('src', '../img/Mobile/Nosotros-logo.png');
    };

    const mq_48 = mql_tablet => {
        if (mql_tablet.matches) {
            img_sobre_mi.setAttribute('src', '../img/tablet/Karolyn-Guzman-del-Rosario-1-Recuperado.jpg');
            logo_sobre_mi.setAttribute('src', '../img/tablet/Nosotros=logo.png');
        }
    };
    const mq_63 = mql_desktop => {
        if (mql_desktop.matches) {

            img_sobre_mi.setAttribute('src', '../img/Desktop/Karolyn-Guzman-del-Rosario-mi-historia.jpg');
            logo_sobre_mi.setAttribute('src', '../img/Desktop/Nosotros-logo.png');
        }
    };

    const mediaq = () => {
        if (mql_desktop.matches) {
            mq_63(mql_desktop)
        } else if (mql_tablet.matches) {
            mq_48(mql_tablet)
        } else {
            defauld();
        }
    };
    addEventListener('resize', () => mediaq());
    mediaq();

});