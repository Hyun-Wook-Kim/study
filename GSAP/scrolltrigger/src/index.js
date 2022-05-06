// import  gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);


console.log('실행')

// const timeline1 = gsap.timeline();

gsap.to('.text-1', {
    scrollTrigger : {
        trigger : ".text-1",
        toggleActions : 'restart none none none'
    },
    opacity : 1
})