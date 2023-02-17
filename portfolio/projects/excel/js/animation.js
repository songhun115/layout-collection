gsap.registerPlugin(ScrollTrigger);

setTimeout(function () {
    
      gsap.from(".section_text_box > .aa", {
        scrollTrigger: {
          trigger: ".section_box",
          toggleActions:'play play play play',
        },
        stagger: {
          each: 0.2
        },
        y: 400,
      });
  
},500);
