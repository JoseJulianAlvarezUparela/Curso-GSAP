let tween = gsap.to(".fred", {
    x: 400,
    duration: 5,
    ease: "none",
    paused: true
});

document.getElementById("play").onclick = function() {
    tween.play();
}

document.getElementById("pause").onclick = function() {
    tween.pause();
}

document.getElementById("reverse").onclick = function() {
    tween.reverse();
}

document.getElementById("restart").onclick = function() {
    tween.restart();
}