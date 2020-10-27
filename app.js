const tl = gsap.timeline({ default: { ease: 'power4' } })
const tl2 = gsap.timeline({ default: { duration: 10 } })

tl.to('.text', { y: '0%', duration: 0.7 })
tl.to('.intro2', { x: '0%', duration: 1, delay: 0.7 })
tl.to('.text2', { y: '0%', duration: 0.9 })
tl.to('.intro', { y: '-100%', duration: 0.5 })
tl.to('.intro2', { y: '-100%', duration: 1 })

tl2.to('svg', { rotation: 360, transformOrigin: "center", repeat: -1, duration: 9, ease: Power0.easeNone })