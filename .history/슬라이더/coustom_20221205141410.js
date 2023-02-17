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

		onScroll : function(){
			// 媛��낇삙�� �뱀뀡 �ㅽ겕濡� �명꽣�숈뀡
			if ( $('.sect_benefit').length ) {				
				var sectAniTop = $('.sect_benefit').offset().top - 300;
				var winTop = $(window).scrollTop();
				if (winTop > sectAniTop && !$('.sect_benefit').find('.img_obj').hasClass('active')) {
					$('.sect_benefit').find('.obj1').addClass('active');
				}
			}
		},
		
		// 硫붿씤鍮꾩＜��
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

		},  // 硫붿씤鍮꾩＜�� ��

		//媛��낇삙��
		benefitSecFunc : function(){
			var pointList = $('.sect_benefit .point_list').find('li');

			pointList.off('click').on('click',function(){
				var pointInd = $(this).index();
				var pointIndPlus = pointInd + 1;

				$(this).addClass('on').siblings().removeClass('on');
				$('.sect_benefit .left_box').find('.img_mockup2').eq(pointInd).addClass('on').siblings().removeClass('on');
				$('.sect_benefit .img_obj').removeClass('active');
				$('.sect_benefit .obj' + pointIndPlus).addClass('active');
				setTimeout(function(){
					$('.sect_benefit .img_box').addClass('active');
				},250);
			});
			pointList.mouseenter(function(e){
				$(this).addClass('hover').siblings().removeClass('hover');
			}).mouseleave(function(e){
				pointList.removeClass('hover');
			}).click(function(e) {
				pointList.removeClass('hover');
			  });
		},
		//媛��낇삙�� ��	

		
		
		// H留ㅺ굅吏� �뱀뀡
	
		// �ъ씤�� �곌린 ��

	},
	
	
}