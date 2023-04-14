gsap.registerPlugin(ScrollTrigger);

setTimeout(function () {
  gsap.from(".section2 > .section_text > .content_intro", {
    scrollTrigger: {
      trigger: ".section2 > .section_text > .content_intro",
      toggleActions: 'play play play play'
    },
    y: 200,
    duration: 0.5
  });

  gsap.from(".section2 > .section_img > .img_box > .section2_img_list > .section2_img_item", {
    scrollTrigger: {
      trigger: ".section2 > .section_text > .content_intro",
      toggleActions: 'play play play play'
    },
    stagger: {
      each: 0.1
    },
    y: 200,
  }); 

gsap.from(".section3 > .section_text > .aa", {
  scrollTrigger: {
    trigger: ".section3 > .section_text",
    toggleActions:'play play play play'
  },
  stagger: {
    each: 0.1
  },
  y: 200,
});

gsap.from(".section3 > .section_img > .img_box > img", {
  scrollTrigger: {
    trigger: ".section3 > .section_text",
    toggleActions:'play play play play'
  },
  duration: 0.7,
  y: 500
});


gsap.from(".section4 > .section_text > .aa", {
  scrollTrigger: {
    trigger: ".section4 > .section_text",
    toggleActions:'play play play play'
  },
  stagger: {
    each: 0.1
  },
  y: 200,
});

gsap.from(".section4 > .section_img > .img_box > ul:first-child > li", {
  scrollTrigger: {
    trigger: ".section4 > .section_text",
    toggleActions:'play play play play'
  },
  y: 700
});


gsap.from(".section4 > .section_img > .img_box > .section2_img_list > .section2_img_item", {
  scrollTrigger: {
    trigger: ".section4 > .section_text",
    toggleActions:'play play play play'
  },
  stagger: {
    each: 0.1
  },
  y: 700
});


gsap.from(".section5 > .section_text > .aa", {
  scrollTrigger: {
    trigger: ".section5 > .section_text",
    toggleActions:'play play play play'
  },
  stagger: {
    each: 0.1
  },
  y: 200,
});

gsap.from(".section5 > .section_img > .img_box > img", {
  scrollTrigger: {
    trigger: ".section5 > .section_text",
    toggleActions:'play play play play'
  },
  duration: 0.7,
  y: 500
});

gsap.from(".section6 > .section_text > .aa", {
  scrollTrigger: {
    trigger: ".section6 > .section_text",
    toggleActions:'play play play play'
  },
  stagger: {
    each: 0.1
  },
  y: 200,
});

gsap.from(".section6 > .section_img > .img_box > ul:first-child > li", {
  scrollTrigger: {
    trigger: ".section6 > .section_text",
    toggleActions:'play play play play'
  },
  y: 700
});


gsap.from(".section6 > .section_img > .img_box > .section2_img_list > .section2_img_item", {
  scrollTrigger: {
    trigger: ".section6 > .section_text",
    toggleActions:'play play play play'
  },
  stagger: {
    each: 0.1
  },
  y: 700
});


gsap.from(".section7 > .section_text > .aa", {
  scrollTrigger: {
    trigger: ".section7 > .section_text",
    toggleActions:'play play play play'
  },
  stagger: {
    each: 0.1
  },
  y: 200,
});

gsap.from(".section7 > .section_img > .img_box > img", {
  scrollTrigger: {
    trigger: ".section7 > .section_text",
    toggleActions:'play play play play'
  },
  duration: 0.7,
  y: 500
});

gsap.from(".section8 > .section_text > .aa", {
  scrollTrigger: {
    trigger: ".section8 > .section_text",
    toggleActions:'play play play play'
  },
  stagger: {
    each: 0.1
  },
  y: 200,
});

gsap.from(".section8 > .section_img > .img_box > ul:first-child > li", {
  scrollTrigger: {
    trigger: ".section8 > .section_text",
    toggleActions:'play play play play'
  },
  y: 700
});

gsap.from(".section8 > .section_img > .img_box > .section2_img_list > .section2_img_item", {
  scrollTrigger: {
    trigger: ".section8 > .section_text",
    toggleActions:'play play play play'
  },
  stagger: {
    each: 0.1
  },
  y: 700
});


gsap.from(".section9 > .section_text > .aa", {
  scrollTrigger: {
    trigger: ".section9 > .section_text",
    toggleActions:'play play play play'
  },
  stagger: {
    each: 0.1
  },
  y: 200,
});

gsap.from(".section9 > .section_img > .img_box > img", {
  scrollTrigger: {
    trigger: ".section9 > .section_text",
    toggleActions:'play play play play'
  },
  duration: 0.7,
  y: 500
});

}, 200);


