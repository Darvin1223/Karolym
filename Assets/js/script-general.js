// El script espera a que todo se cargue para actuar.
document.addEventListener("DOMContentLoaded", () => {
    /** Script para hacer la pagina resposive **/

    // Declarando los media query.
    const mql_tablet = matchMedia("(min-width: 48rem)"),
        mql_desktop = matchMedia("(min-width: 63.938rem)");


    // Manejo del DOM.

    // Selecionando elementos del DOM
    let logo_barra = document.querySelector(".logo-barra"),
        slogan_bg = document.querySelector(".slogan_bg-img"),
        logo_footer = document.querySelector('.logo_footer'),
        slogan_footer = document.querySelector('.slogan_footer');

    const defauld = () => {
        logo_barra.setAttribute('src', '../img/Mobile/logo-blanco.png');
        slogan_bg.setAttribute('src', '../img/Mobile/sloganfondo-celular.jpg');
        logo_footer.setAttribute('src', '../img/Mobile/Logo-footer.png');
        slogan_footer.setAttribute('src', '../img/Mobile/Slogan-footer.png');
    };

    const mq_48 = mql_tablet => {
        if (mql_tablet.matches) {
            logo_barra.setAttribute('src', '../img/tablet/Logo-barra.png');
            slogan_bg.setAttribute('src', '../img/tablet/sloganfondo1.jpg');
            logo_footer.setAttribute('src', '../img/tablet/Logo-footer.png');
            slogan_footer.setAttribute('src', '../img/tablet/Slogan-footer.png');
        }
    };
    const mq_63 = mql_desktop => {
        if (mql_desktop.matches) {
            logo_barra.setAttribute('src', '../img/Desktop/Logo-barra.png');
            slogan_bg.setAttribute('src', '../img/Desktop/sloganfondo1.jpg');
            logo_footer.setAttribute('src', '../img/Desktop/Logo-footer.png');
            slogan_footer.setAttribute('src', '../img/Desktop/Slogan-footer.png');
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