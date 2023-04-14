/* pc menu_btn click to show and hide menu_bg */
$(function(){
  $('.toggle_btn').click(function() {
    $('.side_bg').addClass('active');
  });
  
  $('.close_toggle_btn').click(function() {
    $('.side_bg').removeClass('active');
  })

  
/* mobile menu_btn click to show and hide menu_bg */
$('.mobile_toggle_btn').click(function() {
  $('.mobile_side_bg').addClass('active');
});

$('.mobile_close_toggle_btn').click(function() {
  $('.mobile_side_bg').removeClass('active');
});

});

/*scroll down shrink */
$(function(){
	const shrinkHeader = 1;
    $(window).scroll(function(){
    	var scroll = getCurrentScroll();
        if(scroll >= shrinkHeader){
        	$('.nav_bar').addClass('shrink');
        }else{
        	$('.nav_bar').removeClass('shrink');
        }
    });
    function getCurrentScroll(){
    	return window.pageYOffset || document.documentElement.scrollTop;
    }
});

/* slider  */
const btn = $('.sliders_box > .side-btns > .lift_btn > .fas');
btn.click(init);
function init(){
  console.log('hi');
}

const SbsSlider = $('.sliders_box > .side-btns > div');
function SbsSlider__onClickPostBtn() {
  console.log('hi');
    var $this = $(this);
    var index = $this.index();
    
    // 내가 왼쪽으로 이동해야 되나?
    var isLeft = index == 0;
    
    var $slider = $this.closest('.sliders_box');
    
    var $current = $slider.find(' > .sliders > slider_item.active');
    var $post;
    
    if ( isLeft ) {
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    }
    
    if ( $post.length == 0 ) {
        if ( isLeft ) {
            $post = $slider.find(' > .sliders > slider_item:last-child');
        }
        else {
            $post = $slider.find(' > .sliders > slider_item:first-child');
        }
    }
    
    $current.removeClass('active');
    $post.addClass('active');
}

SbsSlider.click(SbsSlider__onClickPostBtn);