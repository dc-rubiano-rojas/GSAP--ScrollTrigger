// const { ScrollTrigger } = require("gsap/all");

gsap.registerPlugin(ScrollTrigger);

function init() {

    // ========SIMPLE TWEEN========
    // gsap.to('#intro img', {
    //     opacity: 0,
    //     scrollTrigger: {
    //         trigger: '#intro', // El objeto del DOM que va a funcionar como trigger
    //         start: 'top top',
    //         end: 'bottom center',
    //         scrub: true, // Para controlar el scrolling en el browser
    //         markers: true
    //     }
    // });



    // =============TOOGLE CSS CLASS=================
    // gsap.set("#project02", {
    //     scrollTrigger: {
    //         trigger: '#project02',
    //         start: 'start bottom-=10%', // Me desplaza 10% el punto en viewport
    //         end: 'bottom center-=10%',
    //         toggleClass: 'active', // Esto lo debomos aplicar en el css
    //         markers: true
    //     }
    // });



    // ===========SIMPLE PARALLAX=================
    // const parallaxTl = gsap.timeline({
    //     ease: 'none',
    //     scrollTrigger: {
    //         trigger: '.bcg-parallax',
    //         start: 'top bottom',
    //         scrub: true,
    //         // markers: true,
    //     }
    // });

    // // autoAplpha anima opacidad de 1 a 0 y luego la oculta
    // // al ponerla en 0 lo vuelve visible y luego pasa opacity de 0 a 1
    // parallaxTl
    //     .from('.content-wrapper', { duration: 0.4, autoAlpha: 0 }, 0.4)
    //     .from('.bcg', { duration: 2, y: '-30%' }, 0);




    // ===============PIN EFFECT=================
    // gsap.to(['#intro h1', '#intro p'], {
    //     autoAlpha: 0,
    //     ease: 'none',
    //     scrollTrigger: {
    //         trigger: '#intro .content',
    //         start: 'top top+=5%',
    //         end: 'bottom-=52% top',
    //         pin: true,
    //         scrub: true,
    //         markers: true,
    //     }
    // });



    // =================TOOGLE ACTIONS ==================
    // ===============CALLBACK FUNCTIONS===================
    // En el toggleActions la primera accion controla cuando start choca con el start de viewport
    // la segunda accion cuando end choca con el end del viewport
    // la tercera es lo mismo que la segunda pero cuando choca en la direccion opuesta que la segunda
    // la cuarta es igual que la primera pero cuando la direccion es la opuesta
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {

        gsap.from(project, {
            opacity: 0,
            yPercent: 5,
            scrollTrigger: {
                trigger: project.querySelector('img'),
                start: 'top bottom-=200',
                end: 'top center',
                toggleActions: 'play none none reverse',
                scrub: true,
                // onUpdate: ({ progress, direction, isActive, getVelocity }) => console.log(progress, direction, isActive, getVelocity()),
                onToggle: () => { console.log('toogle'); },
                onEnter: () => { console.log('onEnter'); },
                onLeave: () => { console.log('onLeave'); },
                onEnterBack: () => { console.log('onEnterBack'); },
                onLeaveBack: () => { console.log('onLeaveBack'); },
                markers: true
            }
        });

    });


}

window.addEventListener('load', function() {
    init();
});