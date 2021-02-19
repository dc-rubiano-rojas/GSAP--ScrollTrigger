// gsap.to('header', { duration: 2, y: 20 });

// gsap.to('h2', {
//     duration: 2,
//     backgroundColor: '#f301cb',
//     delay: 2,
// });

// gsap.to('ul li', {
//     duration: 0.7,
//     x: 40,
//     ease: 'power2.out',
//     stagger: 0.3
// });

// gsap.from('ul li', {
//     duration: 0.7,
//     x: -40,
//     ease: 'power2.out',
//     stagger: 0.1,
//     repeat: 2,
//     repeatDelay: 1
// });

// gsap.to('ul li:last-child', {
//     duration: 0.7,
//     y: 40,
//     ease: 'power2.out',
//     repeat: -1,
//     repeatDelay: 1,
//     yoyo: true,
//     yoyoEase: 'none'
// });


// ==============================FromTo and Set Tweens===================================
// gsap.fromTo('header', { x: -40 }, { x: 40, duration: 2, repeat: 2, ease: 'power2.out', yoyo: true });

// gsap.set('ul', { y: 100 });


// ===========================EJERCICIO - MI SOLUCIÓN=============================
// gsap.from('h1', {
//     duration: 1,
//     y: -20,
//     opacity: 0,
//     ease: 'power2.out',
//     delay: 0
// });
// gsap.from('p', {
//     duration: 1,
//     y: -20,
//     opacity: 0,
//     ease: 'power2.out',
//     delay: 0.4
// });
// gsap.from('img, h2', {
//     duration: 1.2,
//     opacity: 0,
//     ease: 'power2.out',
//     delay: 0.8
// });
// gsap.from('ul li', {
//     duration: 1,
//     opacity: 0,
//     ease: 'power2.out',
//     stagger: 0.4,
//     y: -4,
//     delay: 1
// });


// ======================================SOLUCIÓN DEL VIDEO=================================
// gsap.from(
//     'body', {
//         backgroundColor: "#fff",
//         duration: 1.7,
//         ease: 'none'
//     }
// );

// gsap.fromTo(
//     ['h1', '.intro'], {
//         opacity: 0,
//         y: -20
//     }, {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         ease: 'power1.out',
//         delay: 1.5,
//         stagger: 0.2
//     }
// );

// gsap.from(
//     ['img', 'h2'], {
//         opacity: 0,
//         duration: 0.7,
//         ease: 'none',
//         delay: 2.8
//     }
// );

// gsap.fromTo(
//     'ul li', {
//         opacity: 0,
//         y: -20
//     }, {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         ease: 'power1.out',
//         stagger: 0.2,
//         delay: 4
//     }
// );


// ===========================TimeLines==================================
const runStart = () => {
    console.log('onStart');
};
const runUpdate = () => {
    console.log('onUpdated');
};
const runComplete = () => {
    console.log('onComplete');
};

const tl = gsap.timeline({
    duration: 1,
    paused: true,
    onStart: runStart,
    onComplete: runComplete,
    onUpdate: runUpdate
});

tl.from(
    'body', {
        backgroundColor: "#fff",
        ease: 'none'
    }
)

.fromTo(
        ['h1', '.intro'], {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            ease: 'power1.out',
            stagger: 0.2,
        },
        '-=0.5'
    )
    .from(
        ['img', 'h2'], {
            opacity: 0,
            duration: 0.7,
            ease: 'none',
        }
    )

.fromTo(
    'ul li', {
        opacity: 0,
        y: -20
    }, {
        opacity: 1,
        y: 0,
        ease: 'power1.out',
        stagger: 0.2,
    }
);

const playButtom = document.querySelector('#btnPlay');
const btnPause = document.querySelector('#btnPause');
const btnResume = document.querySelector('#btnResume');
const btnReverse = document.querySelector('#btnReverse');
const btnSpeedUp = document.querySelector('#btnSpeedUp');
const btnSlowDown = document.querySelector('#btnSlowDown');
const btnSeek = document.querySelector('#btnSeek');
const btnProgress = document.querySelector('#btnProgress');
const btnRestart = document.querySelector('#btnRestart');

playButtom.addEventListener('click', () => {
    tl.play();
});

btnPause.addEventListener('click', () => {
    tl.pause();
});

btnResume.addEventListener('click', () => {
    tl.resume();
});

btnReverse.addEventListener('click', () => {
    tl.reverse();
});

btnSpeedUp.addEventListener('click', () => {
    tl.timeScale(2);
});

btnSlowDown.addEventListener('click', () => {
    tl.timeScale(0.5);
});

console.log(tl.duration());
btnSeek.addEventListener('click', () => {
    tl.seek(2);
});

btnProgress.addEventListener('click', () => {
    tl.progress(0.5);
});

btnRestart.addEventListener('click', () => {
    tl.restart();
});


// ============================GREENSOCK SNIPPEDS====================================
// Puedo installar npm i gsap o usa la extension de GreenSock en Visual Studio code