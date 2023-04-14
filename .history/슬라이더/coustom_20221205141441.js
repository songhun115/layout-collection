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

		
		
		// H留ㅺ굅吏� �뱀뀡
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

		}, // 留ㅺ굅吏� �뱀뀡 ��		

		// �대깽�� �뱀뀡
		eventSectFunc : function(){
			// pc �듭뀡
			var eventSwiperOptPC = {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 25,
				speed: 500,
				loop: true,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: '.sect_event .swiper-button-next',
					prevEl: '.sect_event .swiper-button-prev',
				},
				pagination: {
					el: ".sect_event .swiper-pagination",
					type: "progressbar"
				},
				on: {
					beforeInit: function () {
						var slideCnt = this.wrapperEl.querySelectorAll(".sect_event .swiper-container .swiper-slide").length;
						$('.sect_event').find('.all_num').text(Math.ceil(slideCnt/2));
					},
					init: function(){
						var swiper = this;
						var swiperBtn = $(".sect_event").find(".btn-swiper-play");
						swiperBtn.off("click").on("click",function(){
							if($(this).hasClass("paused")) {
								swiperBtn.removeClass("paused").addClass("play");
								swiper.autoplay.stop();
							}
							else {
								swiperBtn.removeClass("play").addClass("paused");
								swiper.autoplay.start();
							}
						});
					},
					activeIndexChange : function() {
						$('.sect_event').find('.active_num').text(((this.realIndex + 1) / 2) + 0.5);
					},
				}
			}

			// mobile �듭뀡
			var eventSwiperOptMO = {
				spaceBetween: 12,
				speed: 500,
				loop: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: '.sect_event .swiper-button-next',
					prevEl: '.sect_event .swiper-button-prev',
				},
				pagination: {
					el: ".sect_event .swiper-pagination",
					type: "progressbar"
				},
				on: {
					beforeInit: function () {
						var slideCnt = this.wrapperEl.querySelectorAll(".sect_event .swiper-container .swiper-slide").length;			
						$('.sect_event').find('.all_num').text(slideCnt);
					},
					init: function(){
						var swiper = this;
						var swiperBtn = $(".sect_event").find(".btn-swiper-play");
						swiperBtn.off("click").on("click",function(){
							if($(this).hasClass("paused")) {
								swiperBtn.removeClass("paused").addClass("play");
								swiper.autoplay.stop();
							}
							else {
								swiperBtn.removeClass("play").addClass("paused");
								swiper.autoplay.start();
							}
						});
					},
					activeIndexChange : function() {
						$('.sect_event').find('.active_num').text(this.realIndex + 1);
						var idx = this.realIndex;
						page.main.setBgIndex(idx)
					},
				}
			}

			var eventSwiperMO = null;
			var eventSwiperPC = null;

			// �섏씠吏� 濡쒕뱶�섎㈃
			if (mql.matches) {
				// console.log("�붾㈃�� �덈퉬媛� 768px 蹂대떎 �묒뒿�덈떎.");
				eventSwiperMO = new Swiper(".eventSwiper", eventSwiperOptMO);
			} else {
				// console.log("�붾㈃�� �덈퉬媛� 768px 蹂대떎 �쎈땲��.");
				eventSwiperPC = new Swiper(".eventSwiper", eventSwiperOptPC);
				page.main.eventBgTransPC();
			}

			// 由ъ궗�댁쫰�덉쓣 �� 誘몃뵒�댁옘由� 遺꾧린�먯뿉�� �쒕쾲留� �ㅽ뻾
			mql.addListener(function(e) {
				if(e.matches) {
					// console.log('紐⑤컮�� �붾㈃ �낅땲��.');
					eventSwiperPC.destroy();
					eventSwiperMO = new Swiper(".eventSwiper", eventSwiperOptMO);
					page.main.eventBgTransMO();
				} else {
					// console.log('�곗뒪�ы깙 �붾㈃ �낅땲��.');
					eventSwiperMO.destroy();
					eventSwiperPC = new Swiper(".eventSwiper", eventSwiperOptPC);
					page.main.eventBgTransPC();
				}
			});
			
			
		},
		eventBgTransMO : function(){
			$('.sect_event .swiper-slide .thumbnail').off('mouseenter, mouseleave');
		},
		eventBgTransPC : function(){
			// �몃꽕�� 留덉슦�ㅼ삤踰� �� 諛곌꼍�� 蹂�寃�
			$('.sect_event .swiper-slide .thumbnail').on('mouseenter', function(){
				var idx = $(this).closest('.swiper-slide').data('swiper-slide-index');
				// console.log(idx)
				page.main.setBgIndex(idx)
			});

			// �뷀뤃�� 諛곌꼍��
			$('.sect_event .swiper-slide .thumbnail').on('mouseleave', function(){
				page.main.setBG('#5ccdb5');
			});
		},

		setBG : function(color){
			$('.sect_event').css({
				'background' : color,
			});
		},
		setBgIndex : function(index){
			if ( index == 0 ) {
				page.main.setBG('#7ecff4');
			}
			else if ( index == 1 ) {
				page.main.setBG('#7faff7');
			}
			else if ( index == 2 ) {
				page.main.setBG('#b9a4f5');
			}
			else if ( index == 3 ) {
				page.main.setBG('#e8adf5');
			}
			else if ( index == 4 ) {
				page.main.setBG('#edabcf');
			}
			else if ( index == 5 ) {
				page.main.setBG('#f4b3b3');
			}
		},
		// �대깽�� �뱀뀡 ��


		// �쒗쑕�� �レ씠��
		hotIssueFunc : function(){

			/********** [S] PC, Tablet **********/
			// �� �щ씪�대뱶
			var issueTabSwiperPC = new Swiper('.issueTabSwiperPC', {
				watchOverflow: true,
				slidesPerView: 'auto',
				freeMode: true,
			});
			var issueTabPC = $('.issueTabSwiperPC .tab');
			issueTabPC.on('click', function(){
				var idx = $(this).index();
				issueTabPC.removeClass('active');
				$(this).addClass('active');
				tabConSwiperPC.slideToLoop(idx);
			});

			// �� 而⑦뀗痢� �щ씪�대뱶
			var tabConOptPC = {
				effect: 'fade',
				fadeEffect: {
					crossFade: true
				},
				simulateTouch: false,
				loop: true,
				loopAdditionalSlides: 1,
				observer: true,
				observeParents: true,
				navigation: {
					nextEl: '.sect_hotissue .swiper-button-next',
					prevEl: '.sect_hotissue .swiper-button-prev',
				},
				on: {
					activeIndexChange : function() {
						$('.issueTabSwiperPC').find('.tab').removeClass('active');
						$('.issueTabSwiperPC').find('.tab').eq(this.realIndex).addClass('active');
						issueTabSwiperPC.slideToLoop(this.realIndex);
					},
				}
			}
			var tabConSwiperPC = new Swiper('.tabConSwiperPC', tabConOptPC);

			// 移대뱶 �щ씪�대뱶
			$('.tab_con_slide').each(function(index){
				var _this = $(this).find('.cardSwiper');
				_this.addClass('instance-' + index);

				var cardSwiper = new Swiper(".cardSwiper.instance-" + index, {
					slidesPerView: 2,
					spaceBetween: 24,
					observer: true,
					observeParents: true,
				});
				tabConSwiperPC.on('activeIndexChange', function(){
					cardSwiper.slideTo(0);
				});
			});
			/********** [E] PC, Tablet **********/


			/********** [S] Mobile **********/
			// �� �щ씪�대뱶
			var issueTabSwiperMO = new Swiper('.issueTabSwiperMO', {
				watchOverflow: true,
				slidesPerView: 'auto',
				freeMode: true,
			});
			var issueTabMO = $('.issueTabSwiperMO .tab');
			issueTabMO.on('click', function(){
				var idx = $(this).index();
				issueTabMO.removeClass('active');
				$(this).addClass('active');
				tabConSwiperMO.slideToLoop(idx);
			});

			// �� 而⑦뀗痢� �щ씪�대뱶
			var tabConOptMO = {
				spaceBetween: 10,
				loop: true,
				loopAdditionalSlides: 1,
				observer: true,
				observeParents: true,
				on: {
					activeIndexChange : function() {
						$('.issueTabSwiperMO').find('.tab').removeClass('active');
						$('.issueTabSwiperMO').find('.tab').eq(this.realIndex).addClass('active');
						issueTabSwiperMO.slideToLoop(this.realIndex);
					},
				}
			}
			var tabConSwiperMO = new Swiper('.tabConSwiperMO', tabConOptMO);
			/********** [E] Mobile **********/

		},
		// �쒗쑕�� �レ씠�� ��


		// 硫붿씤 而⑦뀗痢� 諛곕꼫
		bannerFunc : function(){
			var BnrSwiper = new Swiper(".sect_banner .swiper-container", {
				loop: true,
				loopAdditionalSlides: 3,
				observer: true,
				observeParents: true,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false
				},
				pagination: {
					el: ".sect_banner .swiper-pagination",
					clickable : true
					// type: "progressbar"
				},
				// on: {
				// 	beforeInit: function () {
				// 		var slideCnt = this.wrapperEl.querySelectorAll(".sect_banner .swiper-container .swiper-slide").length;			
				// 		$('.sect_banner').find('.all_num').text(slideCnt);
				// 	},
				// 	activeIndexChange : function() {
				// 		$('.sect_banner').find('.active_num').text(this.realIndex + 1);
				// 	},
				// }
			});

			// var swiperBtn = $(".sect_banner").find(".btn-swiper-play");
			// swiperBtn.off("click").on("click",function(){
			// 	if($(this).hasClass("paused")) {
			// 		swiperBtn.removeClass("paused").addClass("play");
			// 		mainVisSwiper.autoplay.stop();
			// 	}
			// 	else {
			// 		swiperBtn.removeClass("play").addClass("paused");
			// 		mainVisSwiper.autoplay.start();
			// 	}
			// });

		},
		// 硫붿씤 而⑦뀗痢� 諛곕꼫 ��


		// �ъ씤�� �볤린
		collectFunc : function(){

			var collectOptPC = {
				centeredSlides: true,
				slidesPerView: 'auto',
				effect: "coverflow",
				coverflowEffect: {
					rotate: 0,
					stretch: 86,
					depth: 0,
					modifier: 1,
					slideShadows: false,
				},
				loop: true,
				loopAdditionalSlides: 5,
				observer: true,
				observeParents: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false
				},
				navigation: {
					nextEl: ".sect_collect .swiper-button-next",
					prevEl: ".sect_collect .swiper-button-prev"
				},
			}

			var collectOptMO = {
				centeredSlides: true,
				slidesPerView: 'auto',
				effect: "coverflow",
				coverflowEffect: {
					rotate: 0,
					stretch: 265,
					depth: 0,
					modifier: 1,
					slideShadows: false,
				},
				loop: true,
				loopAdditionalSlides: 5,
				observer: true,
				observeParents: true,
				// autoplay: {
				// 	delay: 3000,
				// 	disableOnInteraction: false
				// },
			}


			var collectSwiperMO = null;
			var collectSwiperPC = null;

			// �섏씠吏� 濡쒕뱶�섎㈃
			if (mql.matches) {
				collectSwiperMO = new Swiper(".collectSwiper", collectOptMO);
			} else {
				collectSwiperPC = new Swiper(".collectSwiper", collectOptPC);
			}

			// 由ъ궗�댁쫰�덉쓣 �� 誘몃뵒�댁옘由� 遺꾧린�먯뿉�� �쒕쾲留� �ㅽ뻾
			mql.addListener(function(e) {
				if(e.matches) {
					collectSwiperPC.destroy();
					collectSwiperMO = new Swiper(".collectSwiper", collectOptMO);
				} else {
					collectSwiperMO.destroy();
					collectSwiperPC = new Swiper(".collectSwiper", collectOptPC);
				}
			});


		},
		// �ъ씤�� �볤린 ��


		// �ъ씤�� �곌린
		useFunc : function(){

			var useOptMO = {
				slidesPerView: 1,
				spaceBetween: 10,
				loop: true,
				loopAdditionalSlides: 3,
				observer: true,
				observeParents: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false
				},
				pagination: {
					el: ".sect_use .swiper-pagination",
					type: "progressbar"
				},
				on: {
					beforeInit: function () {
						var slideCnt = this.wrapperEl.querySelectorAll(".sect_use .swiper-container .swiper-slide").length;			
						$('.sect_use').find('.all_num').text(slideCnt);
					},
					init: function(){
						var swiper = this;
						var swiperBtn = $(".sect_use").find(".btn-swiper-play");
						swiperBtn.off("click").on("click",function(){
							if($(this).hasClass("paused")) {
								swiperBtn.removeClass("paused").addClass("play");
								swiper.autoplay.stop();
							}
							else {
								swiperBtn.removeClass("play").addClass("paused");
								swiper.autoplay.start();
							}
						});
					},
					activeIndexChange : function() {
						$('.sect_use').find('.active_num').text(this.realIndex + 1);
					},
				}
			}

			var useSwiperMO = null;

			// �섏씠吏� 濡쒕뱶�섎㈃
			if (mql.matches) {
				useSwiperMO = new Swiper(".useSwiper", useOptMO);
			}

			// 由ъ궗�댁쫰�덉쓣 �� 誘몃뵒�댁옘由� 遺꾧린�먯뿉�� �쒕쾲留� �ㅽ뻾
			mql.addListener(function(e) {
				if(e.matches) {
					useSwiperMO = new Swiper(".useSwiper", useOptMO);
				} else {
					useSwiperMO.destroy();
				}
			});

		},
		// �ъ씤�� �곌린 ��

	},
	
	
}