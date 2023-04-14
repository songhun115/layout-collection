var popName;
var mql = window.matchMedia("screen and (max-width: 768px)");
var mql2 = window.matchMedia("screen and (max-width: 1024px)");
var commonPub = {
	common : function(){
		setTimeout(function(){
			$(window).off('scroll').on('scroll', commonPub.scrollEvent);
			$(window).trigger('scroll');

			$(window).off('resize').on('resize', commonPub.resizeEvent);
			$(window).trigger('resize');

			commonPub.readonlyBackspaceOff();
			commonPub.inputBundle();
			commonPub.accordianList();
			commonPub.goTop();
			commonPub.layerPopDimClose();

			commonPub.gnbMenuHeight();
			commonPub.pcGnbFunc();
			commonPub.moLnbFunc();
			commonPub.quickMenu();
			commonPub.addQuick();
			commonPub.bottomBanner();
			
		} , 0);
		
		setTimeout(function(){
			commonPub.pageTopBnr();

		}, 300)

	},
	
	gnb1depthPoint : function(pageId) {
		$('#gnb .'+ pageId +' .depth1').addClass('on');
		$('#mobileGnb .'+ pageId +' .depth1').addClass('on').next('.depth2').css('display','block');
	},	

	gnbMenuHeight : function(){
		var menuLength = $('#gnb > ul > li').length;
		var menuHeight = [];

		for (var i = 0; i < menuLength; i++) {
			var dept2Height = $('#gnb > ul > li').eq(i).find('.depth2').innerHeight();
			menuHeight.push(dept2Height);

			var maxNum = Math.max.apply(null, menuHeight);
			var longestHeight = maxNum + 53;
		}

		// console.log(longestHeight)
		$('.gnb_menu_layer .menu_bg').css({'height' : longestHeight });
	},

	// PC GNB
	pcGnbFunc : function(){

		// 硫붾돱 �щ떕湲�
		/* 2022-09-30 �� �묎렐�� [S] */
		$('#gnb').on('mouseenter focusin', function(){
			$('#headerDim').stop().fadeIn(200);
			$('.gnb_menu_layer').stop().slideDown(200);
			$('#gnb .depth2').stop().slideDown(200);
		});
		$('#header').on('mouseleave focusout', function(){
			$('#headerDim').stop().fadeOut(200);
			$('.gnb_menu_layer').stop().slideUp(200);
			$('#gnb .depth2').stop().slideUp(200);
		});
		/* 2022-09-30 �� �묎렐�� [E] */
		
		// 1�곸뒪 硫붾돱 媛뺤“
		var pageId = $('#contents > div').attr('id');
		if ( pageId == 'introduce' ) {
			commonPub.gnb1depthPoint('introduce');
		}
		else if ( pageId == 'collect' ) {
			commonPub.gnb1depthPoint('collect');
		}
		else if ( pageId == 'use' ) {
			commonPub.gnb1depthPoint('use');
		}
		else if ( pageId == 'benefit' ) {
			commonPub.gnb1depthPoint('benefit');
		}
		else if ( pageId == 'club' ) {
			commonPub.gnb1depthPoint('club');
		}
		else if ( pageId == 'hpay' ) {
			commonPub.gnb1depthPoint('hpay');
		}
		else if ( pageId == 'hmagazine' ) {
			commonPub.gnb1depthPoint('hmagazine');
		}
		else if ( pageId == 'customer' ) {
			commonPub.gnb1depthPoint('customer');
		}
		$('#gnb > ul > li').on('mouseenter', function(){
			$(this).find('.depth1').addClass('on');
		}).on('mouseleave', function(){
			$('#gnb .depth1').removeClass('on');
			commonPub.gnb1depthPoint(pageId);
		});

		
		// gnb 諛곕꼫 2媛쒖씪��
		var gnbBnrLength = $('.gnb_banner .img').length;
		if ( gnbBnrLength > 1 ) {
			$('.gnb_banner .img').eq(0).css({'background-position' : 'right center'});
			$('.gnb_banner .img').eq(1).css({'background-position' : 'left center'});
		}


		//�뚯썝媛��� �좊룄 諛곕꼫
		if($('#wrapper').hasClass('mainWrapper')){
			$('.bnr_sign').fadeIn(200);
		}
		else {
			$('.bnr_sign').hide();
		}
		$('.bnr_sign .btn_close').off('click').on('click',function(){
			$('.bnr_sign').fadeOut(200);
		})

	},

	// Mobile LNB
	moLnbFunc : function(){

		// 紐⑤컮�� 硫붾돱 踰꾪듉
		$('.btn_hd_menu').on('click', function(){
			if (!$(this).hasClass('on')) {
				$('body').css({'overflow': 'hidden'});
				$(this).addClass('on');
				commonPub.moLnbOpen();
			} 
			else {
				$('body').css({'overflow': ''});
				$(this).removeClass('on');
				commonPub.moLnbClose();
			}
		});

		// 紐⑤컮�� 2�곸뒪 硫붾돱 �몄텧
		$('#mobileGnb .depth1').on('click', function(){
			$('#mobileGnb .depth1').removeClass('on');
			$('#mobileGnb .depth2').hide();
			$(this).addClass('on').next('.depth2').show();
		});

		// lnb 諛곕꼫
		var lnbBnrLength = $('#lnb .swiper-slide').length;
		if ( lnbBnrLength > 1 ) {
			var lnbBnrSwiper = new Swiper("#lnb .swiper-container", {
				loop: true,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				observer: true,
    			observeParents: true,
				pagination: {
					el: $('#lnb .swiper-container').find('.swiper-pagination'),
					clickable : true
				},
			});

			// lnbBnrSwiper();
		}
		
		// lnb�대┛ �곹깭濡� 釉뚮씪�곗� PC�ш린濡� �섎졇�꾨븣 lnb �リ린		
		mql2.addListener(function(e) {
			if(!e.matches) {
				commonPub.moLnbClose();	
				$('.btn_hd_menu').removeClass('on');
			} 
		});
	},
	
	// 紐⑤컮�� 硫붾돱 �닿린
	moLnbOpen : function(){
		// console.log('open');
		$('#lnb').show();
		$('#lnb .dim').fadeIn(300);
		$('#lnb .container').animate({
			scrollTop : 0
		}, 0).animate({
			'right' : 0
		}, 300);
		$('#lnb .top_area').animate({
			'right' : 0,
		}, 300);
	},

	// 紐⑤컮�� 硫붾돱 �リ린
	moLnbClose : function(){
		// console.log('close');
		$('#lnb .dim').fadeOut(300, function(){
			$('#lnb').hide();			
			$('html, body').removeClass('scrollHide');
		});
		$('#lnb .container, #lnb .top_area').animate({
			'right' : '-100%',
		}, 300);
	},

	
	headerScrollAction : function(){
		
		// �ㅽ겕濡� �� body�� �대옒�� 異붽�
		if ($(window).scrollTop() >= 1) {
			$('body').addClass('scrollOn');
		} else {
			$('body').removeClass('scrollOn');
		}

	},

	scrollEvent : function(){
		commonPub.headerScrollAction();
		// bottom fixed �붿냼 �명꽣�꾩뿉 怨좎젙
		// var scrollBottom = $('body').height() - $('.stnd_bar').height() - $(window).scrollTop();
		
		// if (scrollBottom >= $('#footer').innerHeight()){
		// 	$('.bottom_fix_bar').removeClass('meetFooter');
		// }else {
		// 	$('.bottom_fix_bar').addClass('meetFooter');
		// }

		var win_h = $(window).height();
		if ($(window).scrollTop() > win_h) {
			$('.pageTop').fadeIn();
			$('#quickMenu').addClass('withTop');
		} else {
			$('.pageTop').fadeOut();
			$('#quickMenu').removeClass('withTop');
		}

		// �뚮줈�� �듬찓�닿� �대젮�덈뒗 寃쎌슦
		if($('#quickMenu .quick_list').is(':visible') && $('#quickMenu .quick_list').hasClass('mo_quick')){
			// if($('#quickMenu .quick_list').hasClass('quickOpen')) {
			// 	$('#quickMenu .quick_list').slideDown(0);	
			// }
			// else {
			// 	$('#quickMenu .quick_list').slideUp(200);
			// }
			// $('#quickMenu .quick_list').removeClass('quickOpen');

			$('#quickMenu .quick_list').slideUp(200);
		}

		//硫붿씤鍮꾩��� �ㅽ겕濡ㅼ쑀�� 踰꾪듉
		if ($(window).scrollTop() > 0) {
			$('#main .scroll_down').fadeOut(200);
		} else {
			$('#main .scroll_down').fadeIn(200);
		}
	},
	
	resizeEvent : function(){
		if ($('.popup_ui.type_modal').hasClass('active')) {
			commonPub.setLayerPopHeight(popName);
		}

		commonPub.pageTopBnr();
		commonPub.addQuick();
	},

	// �묐같�� �몄텧�� 諛곕꼫 �믪씠 媛믪뿉 �곕씪 �ㅻ뜑 �꾩튂 議곗젙
	pageTopBnr : function(){
		
		if ($('body').hasClass('hasTopBnr')) {
			commonPub.withTopBnr();
		}
		else {
			commonPub.withoutTopBnr();
		}

	},

	withTopBnr : function(){
		var topBnr_h = $('.page_top_banner').height();
		var header_h = $('#header').outerHeight();		
		$('#header').css({'top' : topBnr_h});
		$('#lnb').css({'top' : topBnr_h});
		$('#lnb .top_area').css({'top' : topBnr_h});
		$('#lnb .container').css({'height' : 'calc(100% - ' + topBnr_h + 'px)'});
		$('.btn_hd_menu').css({'top' : topBnr_h});
		$('.hd_util_mo').css({'top' : topBnr_h});
		$('#contents').css({'padding-top' : topBnr_h + header_h});
		$('#hmagazine .viewpageTitle').css({'top' : topBnr_h});
	},

	withoutTopBnr : function(){
		var header_h = $('#header').outerHeight();
		$('#header').css({'top' : 0});
		$('#lnb').css({'top' : 0});
		$('#lnb .container').css({'height' : '100%'});
		$('#lnb .top_area').css({'top' : 0});
		$('.btn_hd_menu').css({'top' : 0});
		$('.hd_util_mo').css({'top' : 0});
		$('#contents').css({'padding-top' : header_h});
		$('#hmagazine .viewpageTitle').css({'top' : 0});
	},

	
	// input �대옒�� add/remove
	inputBundle : function(){
		$('.inp_bundle').each(function(){
			var _input = $(this).find('input[type!="hidden"]');
			var _select = $(this).find('.select');

			// input
			_input.on('focus', function(){
				
				if (!$(this).attr('readonly')) {
					$(this).closest('.inp_bundle').addClass('focus');
					$(this).closest('.inp_bundle').removeClass('error');
					console.log('readonly �꾨떂')
				}

			}).on('blur', function(){
				// 媛믪씠 �놁쑝硫�
				if (!$(this).val()) {
					// console.log("媛� �놁쓬")
					$(this).closest('.inp_bundle').removeClass('focus');
				}
			});

			// select
			_select.on('change', function(){
				$(this).addClass('changed');
			});
			_select.on('focus', function(){
				$(this).closest('.inp_bundle').addClass('focus');
				$(this).closest('.inp_bundle').removeClass('error');
			}).on('blur', function(){
				// 媛믪씠 �놁쑝硫�
				if (!$(this).hasClass('changed')) {
					// console.log("媛� �놁쓬")
					$(this).closest('.inp_bundle').removeClass('focus');
				}
			});
		});

		// �꾪솕踰덊샇
		$('.tel_bundle').each(function(){
			var _inSelect = $(this).find('select');
			var _inInput = $(this).find('input[type!="hidden"]');
			_inSelect.on('focus', function(){
				$(this).closest('.inp_bundle').addClass('focus');
				$(this).closest('.inp_bundle').removeClass('error');
			});
			_inInput.on('focus', function(){
				$(this).closest('.inp_bundle').prev().addClass('focus');
				$(this).closest('.inp_bundle').prev().removeClass('error');

			}).on('blur', function(){
				// �꾪솕踰덊샇 �명뭼�� blur�좊븣 媛믪씠 �놁쑝硫�
				if (!$(this).val()) {
					// �꾪솕踰덊샇 ���됲듃�� focus �쒓굅
					$(this).closest('.inp_bundle').prev().removeClass('focus');
				}
			});
		});

		// textarea 
		$('.textarea_ui').each(function(){
			var _textarea = $(this).find('textarea');

			_textarea.on('focus', function(){
				$(this).addClass('focus');
				$(this).removeClass('error');

			}).on('blur', function(){
				// 媛믪씠 �놁쑝硫�
				if (!$(this).val()) {
					$(this).removeClass('focus');
				}
			});

		});

	},

	// IE input text readonly�쇰븣 諛깆뒪�섏씠�� �뚮윭�� �댁쟾�섏씠吏�濡� �대룞�섏� �딅룄濡�
	readonlyBackspaceOff : function(){
		$(document).keydown(function(e) {
			if(e.target.nodeName != "INPUT" && e.target.nodeName != "TEXTAREA"){
				if(e.keyCode == 8){
					return false;
			   }
			}
			if(e.target.readOnly){ // readonly�� 寃쎌슦 true
				if(e.keyCode == 8){
					return false;
			   }
			}
		});
	},


	
	// accordian list
	accordianList : function(){
		$('.acodiList .ac_head').each(function(){
			$(this).click(function(){
				//議곌굔 �쒓굅
				//if (!$(this).closest('.ac_item').hasClass('on') && !$(this).hasClass('ing') && !$(this).hasClass('ing2')) {
				if (!$(this).closest('.ac_item').hasClass('on')) {
					$('.ac_item').removeClass('on');
					$(this).closest('.ac_item').addClass('on');
					$('.ac_panel').stop().slideUp(200);
					$(this).next().stop().slideDown(200);

				} else {
					$(this).closest('.ac_item').removeClass('on');
					$(this).next().stop().slideUp(200);
				}
			});
		});
	},
	

	//// �앹뾽
	// 踰꾪듉�� �듯빐 紐⑤떖�앹뾽 �ㅽ뵂
	modalPopOpen : function(_this){
		$('body, html').css('overflow','hidden');
		popName = $(_this).data('pop');
		// console.log(popName)
		$('.popup_ui.'+ popName).fadeIn(200, function(){
			$(this).addClass('active');
		})

		// 荑좏룿 �곸꽭 �앹뾽 �댁쓽 app�대룞�섍린 �앹뾽 �꾩슱 ��
		if($(_this).parents('.popup_ui').hasClass('pop_coupon_detail')){
			commonPub.layerPopClose(_this);
		}

		commonPub.setLayerPopHeight(popName);
		return false;
	},

	// 踰꾪듉�� �듯빐 ���섏씠吏��앹뾽 �ㅽ뵂
	fullPopOpen : function(_this){
		$('body, html').css('overflow','hidden');
		popName = $(_this).data('pop');
		// console.log(popName)
		$('.popup_ui.'+ popName).fadeIn(200, function(){
			$(this).addClass('active');
		})
		return false;
	},

	// 紐⑤떖�앹뾽 �뷀뤃�몃줈 �ㅽ뵂
	modalPopOpenSelf : function(target){
		$('body, html').css('overflow','hidden');
		popName = target;
		console.log(popName)
		$('.popup_ui.'+ popName).fadeIn(200, function(){
			$(this).addClass('active');
		})
		commonPub.setLayerPopHeight(popName);
	},


	// 踰꾪듉�� �듯빐 �대떦 �앹뾽 �リ린
	layerPopClose : function(_this){
		$(_this).closest('.popup_ui').fadeOut(200, function(){
			$(this).removeClass('active');
			if (!$('.popup_ui').hasClass('active')) {
				$('body, html').css('overflow','auto');
			}
		});
		/* 2022-10-21 �� �묎렐�� 異붽� [S] */
		$("a[data-focus='on']").focus();
		$(":focus").removeAttr("data-focus"); 
		/* 2022-10-21 �� �묎렐�� 異붽� [E] */
	},

	// �덉씠�댄뙘�� �몃� �대┃�� �앹뾽�リ린
	layerPopDimClose : function() {
		$('.dimCloseArea').on('click', function(e){

			var thisPop = $(this).closest('.popup_ui');
			var thisPopClass = thisPop[0].classList[2];

			$('.popup_ui.'+ thisPopClass).fadeOut(200, function(){
				$(this).removeClass('active');
				if (!$('.popup_ui').hasClass('active')) {
					$('body, html').css('overflow','auto');
				}
			})

		});
	},
	
	
	// �앹뾽�� 釉뚮씪�곗�蹂대떎 �묒쓣 �� 媛��대뜲 �몄텧
	setLayerPopHeight : function(popName){
		var winHeight = $(window).height();
		var popHeight = $('.popup_ui.'+ popName + ' .pop_layer').innerHeight();
		var popHeightHalf = parseInt(popHeight/2 - 50);
		
		if (popHeight < winHeight){
			// console.log(winHeight, popHeight, popName);
			$('.popup_ui.'+ popName +' .pop_layer').css({
				'left':'50%',
				'top':'50%',
				'transform':'translateX(-50%)',
				'margin-top': -popHeightHalf + 'px',
			});

			// 紐⑤컮�� �ъ씠利덉뿉�� 硫붿씤 紐⑤떖 諛곕꼫 �꾩튂 怨좎젙
			if (mql.matches) {
				if (popName == 'pop_mobal_banner') {
					// console.log('硫붿씤 紐⑤떖 諛곕꼫!!!')
					$('.popup_ui.'+ popName +' .pop_layer').css({
						'left':'50%',
						'top':'50%',
						'transform':'translateX(-50%)',
						'margin-top': '-190px',
					});
				}
			}
		}
		else {
			$('.popup_ui.'+ popName +' .pop_layer').css({
				'left':'50%',
				'top':'70px',
				'transform':'translateX(-50%)',
				'margin-top': '0px',
				'transition':'0.3s'
			});
		}
	},

	
	goTop : function(){
		
		$('.btn_top').off('click').on('click', function () {
			$('body,html').animate({scrollTop: 0}, 300);
			return false;
		});
	},


	// �듬찓��
	quickMenu : function(){
		$('#quickMenu .btn_quick').off('click').on('click', function(){
			$('#quickMenu .quick_list').slideToggle(200);
		});
		// $('#quickMenu .quick_list').addClass('quickOpen');
	},

	addQuick : function(){
		if($(window).width() > 1007) {
			$('#quickMenu .quick_list').css({'display': 'block'});
			$('#quickMenu .quick_list').removeClass('mo_quick');
		} 
		else{
			$('#quickMenu .quick_list').addClass('mo_quick');
		}
	},


	// �섎떒 �뚮줈�� 諛곕꼫
	bottomBanner : function(){

		var pcBottomBnrLengh = $('.btm_float_banner .wrap_banner_pc .img').length;
		if ( pcBottomBnrLengh > 1 ) {
			$('.btm_float_banner .img').eq(0).css({'background-position' : 'right center'});
			$('.btm_float_banner .img').eq(1).css({'background-position' : 'left center'});
		}

		var moBottomBnrLengh = $('.btm_float_banner .wrap_banner_mo .swiper-slide').length;
		if ( moBottomBnrLengh > 1 ) {
			var bottomBnrSwiper = new Swiper('.btm_float_banner .swiper-container', {
				loop: true,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				observer: true,
				observeParents: true,
				pagination: {
					el: '.btm_float_banner .swiper-pagination',
				},
			});
		}

	},


	// gnb 諛곕꼫 2媛쒖씪��
	hasTwoBanner : function(){
		var gnbBnrLength = $('.gnb_banner .img').length;
		if ( gnbBnrLength > 1 ) {
			$('.gnb_banner .img').eq(0).css({'background-position' : 'right center'});
			$('.gnb_banner .img').eq(1).css({'background-position' : 'left center'});
		}
	},

	moreview : function(_this){
		var moreCon = $(_this).data('view');
		$('.'+moreCon).slideToggle();
		if($(_this).text() == '�붾낫湲�'){
			$(_this).text('�リ린').addClass('on');
		}else{
			$(_this).text('�붾낫湲�').removeClass('on');
		}
	},

	// �꾩껜�쎄��숈쓽
	checkall : function(_this){
		var allcheckbox = $(_this).parents('.wrap_terms_agree').find('.agree_part input[type="checkbox"]');
		if($(_this).prev('input[type="checkbox"]').prop('checked') == true){
			allcheckbox.prop('checked',false);
		}else{
			allcheckbox.prop('checked',true);
		}
	},

	// 留덉��낆빟愿�
	checkall2 : function(_this){
		var allcheckbox = $(_this).parent().siblings('.box_type2').find('input[type="checkbox"]');
		if($(_this).prev('input[type="checkbox"]').prop('checked') == true){
			allcheckbox.prop('checked',false);
		}else{
			allcheckbox.prop('checked',true);
		}
	},

	// pc,mo �ㅻⅨ留곹겕
	openlink : function(_this){
		console.log('ddd');
		var pc_link = $(_this).data('pclink');
		var mo_link = $(_this).data('molink');
		if($(window).width()< 767){
			window.open(mo_link,'_blank');
		}else{
			window.open(pc_link,'_blank');
		}
		return false;
	}
}