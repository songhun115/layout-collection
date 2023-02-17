var page = {

	tabMenu : {


		

		
		
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
	
	introduce : {
		introduceAnimation : function(){
			var winTop = $(window).scrollTop();
			var content = $('.part');
			var conTop = [];
			
			for(var i=0; i<9; i++) {
				conTop[i] = content.eq(i).offset().top - 300;
				
				if(winTop > conTop[i]) {
					content.eq(i).addClass('on');
				}
			}

			if($('.part2').hasClass('on') && videoChk == 1) {
				$('.part2 .video video').get(0).play();
				videoChk = 0;
			}
		},
		
		introduceSwiper : function(part,slideView){
			// 紐⑹뾽 �щ씪�대뱶
			var mockupSwiper = new Swiper(part + ' .mockupSwiper', {
				simulateTouch: false,
				slidesPerView: 1,
				loop: true,
				loopAdditionalSlides: slideView,
			});
	
			// �띿뒪�� �щ씪�대뱶
			var textSwiper = new Swiper(part + ' .textSwiper', {
				simulateTouch: false,
				slidesPerView: 1,
				effect: 'fade',
				loop: true,
				loopAdditionalSlides: slideView,
				// autoHeight: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				pagination: {
					el: part + ' .swiper-pagination',
					type: "progressbar"
				},
				navigation: {
					nextEl: part + " .swiper-button-next",
					prevEl: part + " .swiper-button-prev"
				},
				on: {
					activeIndexChange : function() {
						$(part).find('.active_num').text(this.realIndex + 1);
					},
				}
			});
	
			textSwiper.controller.control = mockupSwiper;
			mockupSwiper.controller.control = textSwiper;

			var swiperBtn = $(part).find('.btn-swiper-play');
			swiperBtn.off('click').on('click',function(){
				if($(this).hasClass('paused')) {
					swiperBtn.removeClass('paused').addClass('play');
					textSwiper.autoplay.stop();
				}
				else {
					swiperBtn.removeClass('play').addClass('paused');
					textSwiper.autoplay.start();
				}
			})
		},

		quick : function(){
			var winTop = $(window).scrollTop();
			var partTop = [];
			var partBottom = 0;
			var headerHeight = $('#header').outerHeight();
			var quickTop = headerHeight + $('.page_top_banner.guest').outerHeight() + 30;

			for(var i=0; i<3; i++) {
				partTop[i] = parseInt($('.sect_brand .part').eq(i).offset().top - headerHeight);
			}

			partBottom = $('.part6').innerHeight() / 3 * 2 + partTop[2];
			
			if(winTop >= partTop[0] && winTop < partBottom) {
				$('.quick').addClass('fixed');
				
				if($('body').hasClass('hasTopBnr')) {
					$('.quick').css({
						top : quickTop
					})
				}
				else {
					if($(window).width() < 751) {
						$('.quick').css({
							top : 90
						})
					}
					else if($(window).width() < 1008) {
						$('.quick').css({
							top : 95
						})
					}
					else {
						$('.quick').css({
							top : 155
						})
					}
				}

				if(winTop<partTop[1]) {
					$('.quick_nav').addClass('quick_collect').removeClass('quick_enjoy').removeClass('quick_share');
				}
				else if (winTop<partTop[2]){
					$('.quick_nav').addClass('quick_enjoy').removeClass('quick_collect').removeClass('quick_share');
				}
				else {
					$('.quick_nav').addClass('quick_share').removeClass('quick_collect').removeClass('quick_enjoy');
				}
			}else {
				$('.quick').removeClass('fixed');

				if($('body').hasClass('hasTopBnr')) {
					if($(window).width() < 751) {
						$('.quick').css({
							top : 60
						})
					}
					else {
						$('.quick').css({
							top : 35
						})
					}
				}
				else {
					if($(window).width() < 751) {
						$('.quick').css({
							top : 60
						})
					}
					else {
						$('.quick').css({
							top : 35
						})
					}
				}
			}

			$('.quick_list button').off('click').on('click',function(){
				var li = $(this).index();
				$('html,body').animate({
					scrollTop : $('.sect_brand .part').eq(li).offset().top - headerHeight
				},500);
			});

			$('.quick').mouseenter(function(){
				$('.quick').addClass('on');
				$('.quick_list').addClass('on');
				$('.quick_nav').addClass('move');
			}).mouseleave(function(){
				$('.quick').removeClass('on');
				$('.quick_list').removeClass('on');
				$('.quick_nav').removeClass('move');
			});
		},

		functionCall : function(){
			videoChk = 1;
			//�⑥닔遺덈윭�ㅺ린
			page.introduce.introduceSwiper('.part4',3);
			page.introduce.introduceSwiper('.part5',2);
			page.introduce.introduceSwiper('.part6',2);
			page.introduce.introduceAnimation();
            page.introduce.quick();
		},

		onScroll :function(){
			
			var elm = ".sect_brand .part";
			headerHeight = $('#header').outerHeight();
			
			if($(window).width() < 1008) {
				//1024 遺꾧린�먯뿉�� 留덉슦�ㅽ쑀 湲곕뒫 off
				$(elm).each(function (index) {
					$(this).off("mousewheel DOMMouseScroll");
				});
			}
			else {
				$(elm).each(function (index) {
					// 媛쒕퀎�곸쑝濡� Wheel �대깽�� �곸슜
					$(this).on("mousewheel DOMMouseScroll", function (e) {
						e.preventDefault();
						var delta = 0;
						if (!event) event = window.event;
						if (event.wheelDelta) {
							delta = event.wheelDelta / 120;
							if (window.opera) delta = -delta;
						} 
						else if (event.detail)
							delta = -event.detail / 3;
						var moveTop = $(window).scrollTop();
						var elmSelecter = $(elm).eq(index);
						// var win_h = $(window).height();

						// console.log(win_h)
	
						// 留덉슦�ㅽ쑀�� �꾩뿉�� �꾨옒濡�
						if (delta < 0) {
							if ($(elmSelecter).next() != undefined) {
								// try{
								// 	moveTop = $(elmSelecter).next().offset().top - headerHeight;
								// }catch(e){}
	
								if($(window).scrollTop() < $('.part4').offset().top - headerHeight - 1) {
									//�볥떎�� 而⑦뀗痢좉� �� 蹂댁씠吏� �딆� �곹깭�먯꽌 �ㅽ겕濡� �덉쓣 寃쎌슦 �곷떒�� 遺숇룄濡�
									try{
										moveTop = parseInt($('.part4').offset().top - headerHeight);
									}catch(e){}
								}
								else {
									try{
										moveTop = $(elmSelecter).next().offset().top - headerHeight;
									}catch(e){}
								}
	
								// �섎늻�ㅼ쓽 �섎떒 而⑦뀗痢좊줈 �먯뿰�ㅻ읇寃� �섏뼱媛��꾨줉
								if($(elmSelecter).hasClass('part6')){
									try{
										moveTop = $(elmSelecter).parent('.sect_brand').siblings('.part7').offset().top - headerHeight;
									}catch(e){}
								}

							}
	
						// 留덉슦�ㅽ쑀�� �꾨옒�먯꽌 �꾨줈
						} else {
							if ($(elmSelecter).prev() != undefined) {
								try{
									moveTop = $(elmSelecter).prev().offset().top - headerHeight;
								}catch(e){}

								if($(window).scrollTop() > $('.part6').offset().top - headerHeight) {
									//�섎늻�ㅼ쓽 而⑦뀗痢좉� �� 蹂댁씠吏� �딆� �곹깭�먯꽌 �ㅽ겕濡� �덉쓣 寃쎌슦 �곷떒�� 遺숇룄濡�
									try{
										moveTop = $('.part6').offset().top - headerHeight;
									}catch(e){}
								}
								else {
									try{
										moveTop = $(elmSelecter).prev().offset().top - headerHeight;
									}catch(e){}
								}
	
								// �볥떎�� �곷떒 而⑦뀗痢좊줈 �먯뿰�ㅻ읇寃� �섏뼱媛��꾨줉
								if($(elmSelecter).hasClass('part4')){
									try{
										// moveTop = $(elmSelecter).parent('.sect_brand').siblings('.part3').offset().top - headerHeight;
										moveTop = $(elmSelecter).offset().top - $(window).height();
									}catch(e){}
								}
							}
						}
						 
						// �붾㈃ �대룞 0.5珥�(500)
						$("html,body").stop().animate({
							scrollTop: moveTop + 'px'
						}, {
							duration: 500, complete: function () {
							}
						});
					});
				});
			}
		},

		// 媛��낇삙��
		pointList :function(){
			var pointList = $('.wrap_benefit .point_list').find('li');

			pointList.off('click').on('click',function(){
				var pointInd = $(this).index();
				var pointIndPlus = pointInd + 1;

				$(this).addClass('on').siblings().removeClass('on');
				$('.wrap_benefit .left_box').find('.img_mockup2').eq(pointInd).addClass('on').siblings().removeClass('on');
				$('.wrap_benefit .img_obj').removeClass('active');
				$('.wrap_benefit .obj' + pointIndPlus).addClass('active');
				setTimeout(function(){
					$('.wrap_benefit .img_box').addClass('on');
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
		benefitScroll : function(){
			var sectAniTop = $('.wrap_benefit').offset().top - 200;
			var winTop = $(window).scrollTop();

			if (winTop > sectAniTop && !$('.wrap_benefit').find('.img_obj').hasClass('active')) {
				$('.wrap_benefit').find('.obj1').addClass('active');
			}
		},


	},

	collect : {

		//利먭만嫄곕━
		playSwiper : function(){
			var playSwiper = new Swiper('.playSwiper', {
				simulateTouch: false,
				slidesPerView: 'auto',
				loop: true,
				loopAdditionalSlides: 14,
				centeredSlides: true,
				autoplay: {
					delay: 1500,
					disableOnInteraction : false
				},
				speed:500,
				on : {
					activeIndexChange : function() {
						var idx = this.realIndex + 1;
						var idxNo = [];

						for(var i=0;i<14;i++) {
							idxNo[i] = i+1;
							$('.part1').removeClass('color' + idxNo[i]);
						}

						$('.part1').addClass('color' + idx);

						if(this.realIndex<3) {
							$('.area_list .list1').addClass('on').siblings().removeClass('on');
						}
						else if(this.realIndex<7) {
							$('.area_list .list2').addClass('on').siblings().removeClass('on');
						}
						else if(this.realIndex<11) {
							$('.area_list .list3').addClass('on').siblings().removeClass('on');
						}
						else if(this.realIndex<12) {
							$('.area_list .list4').addClass('on').siblings().removeClass('on');
						}
						else {
							$('.area_list .list5').addClass('on').siblings().removeClass('on');
						}
						
					}
				}
			});
		},

		enjoyAnimation : function(){
			var winTop = $(window).scrollTop();
			var content = $('.part');
			var conTop = [];
			
			content.eq(0).find('.inner').addClass('on');

			for(var i=0; i<7; i++) {
				conTop[i] = content.eq(i).offset().top - 300;

				if(winTop > conTop[i]) {
					content.eq(i).find('.img_box').addClass('on');
					content.eq(i).find('.btn_play').addClass('on');
				}
			}

			$('.btn_play').off('click').on('click',function(){
				$('.enjoy .part2').find('.img_box').removeClass('on');
				$(this).removeClass('on');

				setTimeout(function(){
					$('.enjoy .part2').find('.img_box').addClass('on');
					$('.btn_play').addClass('on');
				},100);
			});
		},


		// �곸닔利�/荑좏룿
		receiptAnimation : function(){
			var winTop = $(window).scrollTop();
			var content = $('.part');
			var conTop = [];
			
			for(var i=1; i<4; i++) {
				conTop[i] = content.eq(i).offset().top - 300;

				if(winTop > conTop[i]) {
					content.eq(i).find('.img_box').addClass('on');
				}
			}

			if((winTop > conTop[0]) & stop === true) {
				page.collect.receiptSwiperContent.receiptSwiper();
				stop = false;
			}
		},

		receiptSwiper :function(){
			$('.part1').find('.img_box').addClass('on');
			$('.part1').find('.swiper-pagination').append('<span class="swiper-pagination-progressbar-fill" style="transform: translate3d(0px, 0px, 0px) scaleX(0.5) scaleY(1); transition-duration: 500ms;"></span>');

			setTimeout(function(){
				var receiptSwiper = new Swiper('.receiptSwiper', {
					simulateTouch: false,
					effect: "fade",
					loop: true,
					loopedSlides: 1,
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
					speed:500,
					pagination: {
						el: ".part1 .swiper-pagination",
						type: "progressbar"
					},
					navigation: {
						nextEl: ".receipt_coupon .swiper-button-next",
						prevEl: ".receipt_coupon .swiper-button-prev"
					},
					on : {
						activeIndexChange : function() {
							$('.part1').find('.active_num').text(this.realIndex + 1);
						}
					}
				});

				var swiperBtn = $('.part1').find('.btn-swiper-play');
				swiperBtn.off('click').on('click',function(){
					if($(this).hasClass('paused')) {
						swiperBtn.removeClass('paused').addClass('play');
						receiptSwiper.autoplay.stop();
					}
					else {
						swiperBtn.removeClass('play').addClass('paused');
						receiptSwiper.autoplay.start();
					}
				})
			},1100)
		},
		

		// 異⑹쟾�섍린_�뚭컻
		rechargeAnimation : function(){
			var winTop = $(window).scrollTop();
			var content = $('.smart_recharge');
			var conTop = content.offset().top - 200;

			if(winTop > conTop & stop === true) {
				page.collect.rechargeSwiper();
				stop = false;
			}
		},

		rechargeSwiper :function(){
			var rechargeSwiper = new Swiper('.rechargeSwiper', {
				simulateTouch: false,
				effect: "fade",
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				speed:500,
				loop: true,
				loopedSlides: 1,
				pagination: {
					el: ".rechargeSwiper .swiper-pagination",
					type: "progressbar"
				},
				navigation: {
					nextEl: ".rechargeSwiper .swiper-button-next",
					prevEl: ".rechargeSwiper .swiper-button-prev"
				},
				
				on : {
					activeIndexChange : function() {
						$('.rechargeSwiper').find('.active_num').text(this.realIndex + 1);
					}
				}
			});

			var swiperBtn = $('.rechargeSwiper').find('.btn-swiper-play');
			swiperBtn.off('click').on('click',function(){
				if($(this).hasClass('paused')) {
					swiperBtn.removeClass('paused').addClass('play');
					rechargeSwiper.autoplay.stop();
				}
				else {
					swiperBtn.removeClass('play').addClass('paused');
					rechargeSwiper.autoplay.start();
				}
			})
		},

		//異⑹쟾�섍린_異⑹쟾
		rechargeMethodFunc : function(){
			console.log('sss');
			var methodList = $('.recharge_method .ac_item');
			var headerHeight = $('#header').outerHeight();
			var methodItem_h = $('.recharge_method .ac_item .ac_head').outerHeight() + 8;//8�� 留덉쭊媛�

			methodList.off('click').on('click',function(){
				if($(this).hasClass('on')) {

					var headTop =methodList.eq(0).offset().top - headerHeight + methodItem_h*$(this).index();

					$('html,body').animate({
						scrollTop :headTop
					}, 300)
					
				}
			});


			// methodList.find('.ac_head').off('click').on('click',function(){
				
			// 	var headTop =methodList.eq(0).offset().top - headerHeight + 95*$(this).parent('.ac_item').index();

			// 	$('html,body').animate({
			// 		scrollTop :headTop
			// 	},500)
			// });
		}
	},

	use : {
		onLoad : function(){

		},

		pointshop : {
			onLoad : function(){
				//濡쒕뱶�섏옄留덉옄 留� �곷떒 �명꽣�숈뀡 �쒖옉
				$('.info_area').eq(0).find('.img_box').addClass('on');
			},

			//�ъ씤�몄꺏 �명꽣�숈뀡
			scrollAnimation : function(){
				var winTop = $(window).scrollTop();
				var content = $('.info_area');
				var conTop = [];
	
				for(var i=1; i<3; i++) {
					conTop[i] = content.eq(i).offset().top - 300;
	
					if(winTop > conTop[i]) {
						content.eq(i).find('.img_box').addClass('on');
					}
				}
			}
			
		},

		gift : {
			//�좊Ъ�섍린 �명꽣�숈뀡
			// scrollAnimation : function(){
			// 	var winWidth = $(window).width();
			// 	var winTop = $(window).scrollTop();
			// 	var content = $('.gift_list').find('li');
			// 	var conTop = [];
			// 	var giftInner = $('.gift_list').innerHeight() - 100;
	
			// 	for(var i=0; i<3; i++) {
			// 		conTop[i] = content.eq(i).offset().top - 600;

			// 		if(winWidth>768) {
			// 			if(winTop > 100 && winTop < giftInner) {
			// 				content.eq(i).addClass('on');
			// 			}	
			// 			else {
			// 				content.eq(i).removeClass('on');
			// 			}

			// 		}
			// 		else {
			// 			if(winTop > conTop[i]) {
			// 				content.eq(i).addClass('on');
			// 			}
			// 		}

			// 	}
			// }
			
		},

		donate : {
			//湲곕��섍린_�뚭컻 �명꽣�숈뀡
			introduceAnimation : function(){
				var winTop = $(window).scrollTop();
				var mockupBox = $('.mockup_box');
				var contTop = $('.introduce').offset().top;

				if((winTop > contTop - 255) & stop === true) {
					mockupBox.addClass('on');
					page.use.donate.mockupSwiper();
					stop = false;
				}
			},

			//紐⑹뾽 �대�吏� 蹂���
			mockupSwiper :function(){
				var mockupSwiper = new Swiper('.mockupSwiper', {
					simulateTouch: false,
					effect: "fade",
					loop: true,
					autoplay: {
						delay: 2000,
					},
					speed:500,
				});
			}
		}

	},

	benefit : {
		onLoad : function(){
			$('.part1').find('.swiper-pagination').append('<span class="swiper-pagination-progressbar-fill" style="transform: translate3d(0px, 0px, 0px) scaleX(0.333333) scaleY(1); transition-duration: 500ms;"></span>');
		},
		missionAnimation : function(){
			var winTop = $(window).scrollTop();
			var content = $('.part');
			var conTop = [];
			
			for(var i=0; i<3; i++) {
				conTop[i] = content.eq(i).offset().top - 300;

				if(winTop > conTop[i]) {
					content.eq(i).find('.img_box').addClass('on');
				}
			}

			if((winTop > conTop[0]) & stop === true) {
				page.benefit.missionSwiper();
				stop = false;
			}
		},

		missionSwiper :function(){
			setTimeout(function(){
				var missionSwiper = new Swiper('.missionSwiper', {
					simulateTouch: false,
					effect: "fade",
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
					loop: true,
					loopedSlides: 1,
					speed:500,
					pagination: {
						el: ".part1 .swiper-pagination",
						type: "progressbar"
					},
					navigation: {
						nextEl: ".missionSwiper .swiper-button-next",
						prevEl: ".missionSwiper .swiper-button-prev"
					},
					on : {
						activeIndexChange : function() {
							$('.part1').find('.active_num').text(this.realIndex + 1);
						}
					}
				});
				
				$('.missionSwiper .swiper-slide').eq(0).find('.img_impact').addClass('active');
				var swiperBtn = $('.part1').find('.btn-swiper-play');
				swiperBtn.off('click').on('click',function(){
					if($(this).hasClass('paused')) {
						swiperBtn.removeClass('paused').addClass('play');
						missionSwiper.autoplay.stop();
					}
					else {
						swiperBtn.removeClass('play').addClass('paused');
						missionSwiper.autoplay.start();
					}
				});
			},500)
		}
	},

	club : {
		popBenefit : function(){
			$('.btn_more_benefit').off('click').on('click',function(){
				var tab = $('.tab_ui').find('.tab');
				var benefitContents = $('.benefit_contents');
				var categoryTop = [0,0,0,0,0];
	
				for(var i=1;i<5;i++) {
					for(var j=0;j<i;j++){
						categoryTop[i] += $('.category').eq(j).innerHeight();
					}
				}
				
				tab.off('click').on('click', function(e){
					tab.removeClass('active');
					$(this).addClass('active');
					e.preventDefault();
					benefitContents.animate({
						scrollTop : categoryTop[$(this).index()]
					},500);
				});
			})
		}
	},

	hpay : {
		hpayAnimation : function(){
			var winTop = $(window).scrollTop();
			var content = $('.part2 .method_list li');
			var conTop = [];

			for(var i=0; i<3; i++) {
				conTop[i] = content.eq(i).offset().top - 500;

				if(winTop > conTop[i]) {
					content.eq(i).find('.img_box').addClass('on');
				}
			}
		},
	}
}