const t = gsap.to(".truck", {
    rotation: -40,
    repeat: 1,
    yoyo: true,
})

demo.addEventListener("click", () => t.restart()) 