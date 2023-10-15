gsap.from(".infobar", {
    y: -100,
    duration: 1,
    ease: "back",
})


gsap.from(".content__header-left >*, .bg-rings", {
    x: -700,
    duration: 1,
    ease: "back",
    scale: -0.5,
    stagger: 0.25,
    delay: 1
})

gsap.from(".content__header-right > img, .bg-circle", {
    x: 700,
    duration: 1,
    ease: "back",
    delay: 1

})

const projects = gsap.utils.toArray(".project");
projects.forEach(elem => {
    gsap.from(elem, {
        x:-700,
        scollTrigger: {
            trigger: elem,
            
        }
    })
})


const tl = gsap.timeline({repeat:-1}), 
    split = new SplitText(".header__footer-title", { type: "chars, words" }),
    chars = split.chars;

tl.set(chars, { color: "random([#6fb936, #f38630, #989898, pink])" }, 0.5); 

tl.from(chars, { 
  opacity: 0,
  duration: .1, 
  stagger: .1,
});

tl.to(chars, {
  duration: .5, 
  opacity: 0, 
  stagger: 0.05,
  ease: "power4.inOut",
}); 
