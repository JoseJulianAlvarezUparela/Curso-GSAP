// Mi primera animacion
gsap.to(".Caja-1", {
    duration: 2, 
    x: 100});

// Mi segunda animacion vertical
gsap.to(".Caja-2", {
    duration: 2 , 
    y: 100, delay: 2
})

// Mi tercera animacion con de derecha a izquierda
gsap.to(".Caja-3", 
    {duracion:2,
        x: -100, delay: 3
    })


// Mi cuarta animacion con abajo hacia arriba
gsap.to(".Caja-4", 
    {duration: 1, 
        y: -100, delay: 4
    })


// ***********************


// Abajo a derecha


gsap.to(".Caja-6", 
    {
        duration: 2,
        x: 100,
        y: 100
    })


// Arriba a izquierda

gsap.to(".Caja-7",
    {
        duration: 2,
        x: -100,
        y: 100
    }
)

gsap.to(".Caja-8", {
    duration: 2,
    x: -100,
    y: -100
})

gsap.to(".Caja-9", {
    duration: 2,
    x: 100,
    y: -100
})


// ***********************
// transformaciones 



gsap.to(".Caja-10", {
    duration: 2,
    xPercent: 50,
})

gsap.to(".Caja-11", {
    duration: 2,
    yPercent: 50
})


gsap.to(".Caja-12", {
    duration: 2,
    scale: 2
})


gsap.to(".Caja-13", {
    duration: 2,
    scaleX: 2
})



gsap.to(".Caja-14", {
    duration: 2,
    scaleY: 2
})


gsap.to(".Caja-15", {
    duration: 2,
    rotation: 45
})


gsap.to(".Caja-16", {
    duration: 2,
    skew: 200
})


gsap.to(".Caja-17", {
    duration: 2,
    skewX: 45
})

gsap.to(".Caja-18", {
    duration: 2,
    skewY: 45
})



gsap.to(".Caja-19", {
    duracion: 2,
    opacity: 0.2
})


gsap.to(".Caja-20", {
    duracion: 5,
    scale: 1.5,
    repeat: -1 // Repetir infinitamente
})


gsap.to(".Caja-21", {
    duracion: 1,
    scale: 1.5,
    repeat: 5 
})


gsap.to(".Caja-22", {
    duracion: 2,
    delay: 2,
    scale: 1.5,
})


gsap.to(".Caja-23", {
    duracion: 2,
    y: -100,
    repeat: 4,
    yoyo: true,
})














