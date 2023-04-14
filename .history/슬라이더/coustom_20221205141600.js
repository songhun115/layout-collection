var page = {
	main : {
		onLoad : function(){

			if (navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i)) {
				var mo_h = $('.stnd_bar').height() - $('#header').outerHeight();
				$('#main .sect_visual').css({'height': mo_h});
				$('.pop_watch_app').show();
			}

			page.main.mainVisualFunc();
			page.main.benefitSecFunc();
			page.main.magazineSectFunc();
			page.main.eventSectFunc();
			page.main.hotIssueFunc();
			page.main.bannerFunc();
			page.main.collectFunc();
			page.main.useFunc();

			
		},

	
		
		mainVisualFunc : function(){
			// var interleaveOffset = 0.1;
			var mainVisSwiperOptions = {
				// effect: 'fade',
				// fadeEffect: {
				// 	crossFade: true
				// },
				loop: true,
				loopAdditionalSlides: 4,
				// simulateTouch: false,
				speed: 1000,
				parallax: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false
				},
				watchSlidesProgress: true,
				pagination: {
					el: ".sect_visual .swiper-pagination",
					type: "progressbar"
				},
				navigation: {
					nextEl: ".sect_visual .swiper-button-next",
					prevEl: ".sect_visual .swiper-button-prev"
				},
				observeParents: true,
				observer: true,
				on: {
					init: function () {
						var swiper = this;
						// �곸긽 踰꾪듉 �대┃
						$('.sect_visual .swiper-slide.movie .btn_play').on('click', function(){
							var videoLink = $(this).siblings('.video_landing_link').attr('href');
							// console.log(videoLink)
							$(this).hide();
							$('.sect_visual .wrap_swiper_tools').hide();
							$('.sect_visual .wrap_txt').hide();
							swiperBtn.removeClass("paused").addClass("play");
							swiper.autoplay.stop();
							// $(this).next().show().attr('src', videoLink+'?rel=0&autoplay=1&controls=0');
							$(this).siblings('.slide_bg').find('.video').show().attr('src', videoLink+'?rel=0&autoplay=1&controls=0');
						});
					},
					beforeInit: function () {
						var slideCnt = this.wrapperEl.querySelectorAll(".sect_visual .swiper-container .swiper-slide").length;			
						$('.sect_visual').find('.all_num').text(slideCnt);
					},
					activeIndexChange : function() {
						var swiper = this;
						$('.sect_visual').find('.active_num').text(this.realIndex + 1);
						// console.log(this.realIndex)

						// console.log($('.sect_visual .swiper-slide').eq(this.previousIndex).attr('class'))
						// �곸긽 �ъ깮以묒씪�� �щ씪�대뱶 �섍린硫�
						if ($('.sect_visual .swiper-slide').eq(this.previousIndex).hasClass('movie')) {
							$('.sect_visual .swiper-slide.movie .btn_play').show();
							$('.sect_visual .wrap_swiper_tools').show();
							$('.sect_visual .wrap_txt').show();
							$(".sect_visual").find(".btn-swiper-play").removeClass("play").addClass("paused");
							swiper.autoplay.start();
							$('.sect_visual .swiper-slide.movie .video').hide().attr('src', '');
						}
					},
					// progress: function () {
					// 	var swiper = this;
					// 	for (var i = 0; i < swiper.slides.length; i++) {
					// 		var slideProgress = swiper.slides[i].progress;
					// 		var innerOffset = swiper.width * interleaveOffset;
					// 		var innerTranslate = slideProgress * innerOffset;
					// 		swiper.slides[i].querySelector(".slide_inner").style.transform =
					// 			"translate3d(" + innerTranslate + "px, 0, 0) rotate(0.001deg)";
					// 	}
					// },
					// touchStart: function () {
					// 	var swiper = this;
					// 	for (var i = 0; i < swiper.slides.length; i++) {
					// 		swiper.slides[i].style.transition = "";
					// 	}
					// },
					// setTransition: function (speed) {
					// 	var swiper = this;
					// 	for (var i = 0; i < swiper.slides.length; i++) {
					// 		swiper.slides[i].style.transition = speed + "ms";
					// 		swiper.slides[i].querySelector(".slide_inner").style.transition =
					// 			speed + "ms";
					// 	}
					// },
				}
			};

			var mainVisSwiper = new Swiper(".sect_visual .swiper-container", mainVisSwiperOptions);

			var swiperBtn = $(".sect_visual").find(".btn-swiper-play");
			swiperBtn.off("click").on("click",function(){
				if($(this).hasClass("paused")) {
					swiperBtn.removeClass("paused").addClass("play");
					mainVisSwiper.autoplay.stop();
				}
				else {
					swiperBtn.removeClass("play").addClass("paused");
					mainVisSwiper.autoplay.start();
				}
			});

		}, 

		benefitSecFunc : function(){
			
		
		},

		
		
		magazineSectFunc : function(){			
			// �� �щ씪�대뱶
			var magTabSwiper = new Swiper('.magTabSwiper', {
				watchOverflow: true,
				slidesPerView: 'auto',
				freeMode: true,
			});
			var magTab = $('.magTabSwiper .tab');
			magTab.on('click', function(){
				var idx = $(this).index();
				magTab.removeClass('active');
				$(this).addClass('active');
				magThumbSwiper.slideToLoop(idx);
			});

			// �몃꽕�� �щ씪�대뱶
			var magThumbSwiper = new Swiper('.magThumbSwiper', {
				simulateTouch: true,
				slidesPerView: 1,
				loop: true,
				loopAdditionalSlides: 2,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				spaceBetween: 30,
				navigation: {
					nextEl: '.sect_magazine .swiper-button-next',
					prevEl: '.sect_magazine .swiper-button-prev',
				},
				pagination: {
					el: ".sect_magazine .swiper-pagination",
					type: "progressbar"
				},
				on: {
					beforeInit: function () {
						var slideCnt = this.wrapperEl.querySelectorAll(".sect_magazine .swiper-container .swiper-slide").length;			
						$('.sect_magazine').find('.all_num').text(slideCnt);
					},
					activeIndexChange : function() {
						$('.magTabSwiper').find('.tab').removeClass('active');
						$('.magTabSwiper').find('.tab').eq(this.realIndex).addClass('active');
						magTabSwiper.slideToLoop(this.realIndex);
						$('.sect_magazine').find('.active_num').text(this.realIndex + 1);
					},
				}
			});

			var swiperBtn = $(".sect_magazine").find(".btn-swiper-play");
			swiperBtn.off("click").on("click",function(){
				if($(this).hasClass("paused")) {
					swiperBtn.removeClass("paused").addClass("play");
					magThumbSwiper.autoplay.stop();
				}
				else {
					swiperBtn.removeClass("play").addClass("paused");
					magThumbSwiper.autoplay.start();
				}
			});

			// �띿뒪�� �щ씪�대뱶
			var magTextSwiper = new Swiper('.magTextSwiper', {
				simulateTouch: false,
				loop: true,
				loopAdditionalSlides: 2,
				// autoHeight: true,
				effect: 'fade',
			});

			magThumbSwiper.controller.control = magTextSwiper;
			magTextSwiper.controller.control = magThumbSwiper;			

		}, 


	},
	
	
}