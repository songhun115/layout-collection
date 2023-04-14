
$(function(){
    let last = 0;
  $(window).scroll(function(){
        var curr = $(this).scrollTop();
        if(!$('body').hasClass('menu-active')){


            if (curr >= $(window).height()) {
                $('.header-area').addClass('active')

                if(curr > last){
                    $('.header-area').addClass('hide')
                }else{
                    $('.header-area').removeClass('hide')
                }

            } else {
                $('.header-area').removeClass('active')
            }


        }
        last = curr;
    })
    $(window).trigger('scroll')


 


        $('.btn-menu').click(function(e){
            e.preventDefault();
            $('body').addClass('menu-active')
            $('.side-area').addClass('active')
        })


      

        $('.dimmed, .side-area .close').click(function(e){
            e.preventDefault();
            $('body').removeClass('menu-active')
            $('.side-area').removeClass('active')
        })


        var recruitCnt = $('.sc-recruit .swiper-slide').length;
        var swiper = new Swiper(".sc-recruit .swiper", {
            slidesPerView:'auto',
            spaceBetween: 20,
            initialSlide:recruitCnt
    
        });
    
    
        var intro = gsap.timeline({
            repeat:-1,
            yoyo:true,
            defaults:{
                ease:'none',
            }
        })
    
        intro.addLabel('motion01')
        .to('.works01',30,{yPercent:40},'motion01')
        .to('.works02',30,{yPercent:20},'motion01')
        .to('.works03',30,{yPercent:-10},'motion01')


        $('.class-nav a').click(function(e){
            e.preventDefault();
            position = 33.33*($(this).index()-1)
            target = $(this).data('class');

            $(this).addClass('active').siblings().removeClass('active');
            $(target).addClass('active').siblings().removeClass('active');


            gsap.to('.class-nav .curr',{
               left:position+'%'
            })

            gsap.fromTo(target+'> div',{
                opacity:0,
                yPercent:30
            },{
                opacity:1,
                stagger:0.2,
                yPercent:0,
            })

        })


    gsap.to('.title-bg',{
        scrollTrigger:{
            trigger:".sc-wroks",
            top:"top top",
            end:"bottom top",
            scrub:2,
        },
        yPercent:100,
    })


    gsap.utils.toArray('.works-list .works-item').forEach(element => {
        console.log(element);
        
        gsap.fromTo(element,{
            opacity:0
        },{
            scrollTrigger:{
                trigger:element,
                start:"top bottom",
                end:"bottom top",
            },
            opacity:1,
            duration:1,
            
        })
    
    });



    gsap.from('.sc-company .cp-item',{
        opacity:0,
        stagger:{
            from: "random",
            amount: 3,   
        }
    })



    // $(".sc-pain .pain-item").mousemove(function(e){
    //     var x = ((-$(this).width() / 2) + e.offsetX) *0.02;    
    //     var y = ((-$(this).height() / 2) + e.offsetY) *0.02;
    //     gsap.to($(this).find('.wrap *'), {
    //       transform: "translate(" + x + "px," + y + "px)",
    //       stagger:0.001
    //     })
    //   })

    //   $(".sc-pain .pain-item").mouseleave(function(e){
    //     gsap.to(".pain-item .wrap", {
    //       transform: "translate(0,0)"
    //     })
    //   })

var recruitCnt = $('.sc-recruit .swiper-slide').length;
var swiper = new Swiper(".sc-recruit .swiper", {
    slidesPerView:'auto',
    spaceBetween: 20,
    initialSlide:recruitCnt

});


var intro = gsap.timeline({
    repeat:-1,
    yoyo:true,
    defaults:{
        ease:'none',
    }
})

intro.addLabel('motion01')
.to('.works01',30,{yPercent:40},'motion01')
.to('.works02',30,{yPercent:20},'motion01')
.to('.works03',30,{yPercent:-10},'motion01')
})