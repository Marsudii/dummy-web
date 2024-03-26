gsap.from(".top .light-blue", {
    clipPath: "polygon(0 0, 100% 0, 100% 0%, 73% 0%)",
    duration: 0.5,
    y: -200,
    opacity: 0,
});
gsap.from(".top .dark-blue", {
    clipPath: "polygon(0 0, 100% 0, 100% 0%, 42% 0%)",
    duration: 0.5,
    y: -200,
    opacity: 0,
    delay: 0.2,
});
gsap.from(".top .white", {
    clipPath: "polygon(54% 0, 100% 0, 100% 0, 43% 0)",
    duration: 0.5,
    y: -200,
    opacity: 0,
    delay: 0.4,
});

gsap.from(".bottom .light-blue", {
    clipPath: "polygon(28% 100%, 100% 100%, 100% 100%, 47% 100%)",
    duration: 0.5,
    y: 200,
    opacity: 0,
});
gsap.from(".bottom .dark-blue", {
    clipPath: "polygon(67% 100%, 100% 100%, 100% 100%, 59% 100%)",
    duration: 0.5,
    y: 200,
    opacity: 0,
    delay: 0.2,
});
gsap.from(".bottom .white", {
    clipPath: "polygon(20% 100%, 100% 100%, 100% 100%, 6% 100%)",
    duration: 0.5,
    y: 200,
    opacity: 0,
    delay: 0.4,
});
gsap.from(".swiper-slide img", {
    x: 900,
    duration: 1,
    delay: 0.3,
});
gsap.from(".swiper-slide h2", {
    y: 100,
    duration: 0.5,
    delay: 0.3,
    opacity: 0,
    stagger: 0.2,
});
gsap.from(".swiper-slide p", {
    y: 100,
    duration: 0.5,
    delay: 0.3,
    opacity: 0,
});
gsap.from(".video", {
    x: 100,
    duration: 0.5,
    delay: 0.3,
    opacity: 0,
});

var swiper = new Swiper(".swiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    speed: 1200,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -1000],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});