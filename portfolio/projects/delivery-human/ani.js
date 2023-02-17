gsap.registerPlugin(ScrollTrigger);

setTimeout(function () {
      gsap.from(".animation_img1", {
        scrollTrigger: {
          trigger: "ani1",
          toggleActions: 'play play play play',
          markers:true
        },
        x: 800,
        delay:1,
        duration: 0.5
      });

    
   
}, 500);


