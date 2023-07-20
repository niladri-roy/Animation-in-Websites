gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.home',
		content: '.container',
		smooth: 1.5,
		effects: true
	})

            gsap.to('.image', {
            opacity: 0,
  y: '-100%', // Adjust the value to control the intensity and speed of the image movement
  ease: 'none',
  scrollTrigger: {
    trigger: '.container',
    start: 'top top',
    end: '20% top',
    scrub: true,
  },
});

gsap.to('.text', {
    opacity: 0,
  y: '50%', // Adjust the value to control the intensity and speed of the text movement
  ease: 'none',
  scrollTrigger: {
    trigger: '.container',
    start: 'top top',
    end: '20% top',
    scrub: true,
  },
});
	

}
