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


	},
	
	
}