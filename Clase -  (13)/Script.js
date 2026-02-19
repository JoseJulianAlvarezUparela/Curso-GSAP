gsap.set("#demo", {
    scale: 0.7
})


gsap.timeline()
.from("#demo", {
    opacity: 0,
})
.from("title", {
    opacity: 0,
    scale: 0,
    ease: "back"
}).from("#freds img ", {
    y: 160,
    stagger: 0.2,
    duration: 1,
    ease: "back"
}).from("#time", {
    xPercent: 100,
    yPercent: 100,
})