let animation = gsap.timeline();
animation
    .to(".start", {
        duration: 1,
        x: 200
    })
    .to(".cuadrado", {
        duration: 3,
        x: 230
    })
    .to(".circulo", {
        duration: 1,
        x: 260
    })