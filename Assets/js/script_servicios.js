// El script espera a que todo se cargue para actuar.
document.addEventListener("DOMContentLoaded", () => {
    /** Script para hacer la pagina resposive **/

    // Declarando los media query.
    const mql_tablet = matchMedia("(min-width: 48rem)"),
        mql_desktop = matchMedia("(min-width: 63.938rem)");


    // Manejo del DOM.

    // Selecionando elementos del DOM
    let index_s_img_1 = document.querySelector('.index_s-img_1'),
        index_s_img_2 = document.querySelector('.index_s-img_2');

    const defauld = () => {
        index_s_img_1.setAttribute('src', '../img/Mobile/Servicio2.jpg');
        index_s_img_2.setAttribute('src', '../img/Mobile/Servicio1.jpg');
    };

    const mq_48 = mql_tablet => {
        if (mql_tablet.matches) {
            index_s_img_1.setAttribute('src', '../img/tablet/Servicio2.jpg');
            index_s_img_2.setAttribute('src', '../img/tablet/Servicio1.jpg');
        }
    };
    const mq_63 = mql_desktop => {
        if (mql_desktop.matches) {

            index_s_img_1.setAttribute('src', '../img/Desktop/Servicio2.jpg');
            index_s_img_2.setAttribute('src', '../img/Desktop/Servicio1.jpg');
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