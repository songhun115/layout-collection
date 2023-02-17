// 풀페이지 스크립트 내의 동영상 멈춤 함수 영역. 
//해당 부분을 삭제혹은 주석처리하면 해당 멈춤현상 처리됨.


function stopMedia(destiny){
            var panel = getSlideOrSection(destiny);

            stopping HTML5 media elements
            $('video, audio', panel).forEach(function(element){
                if( !element.hasAttribute('data-keepplaying') && typeof element.pause === 'function' ) {
                    element.pause();
                }
            });

            //youtube videos
            $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element){
                if( /youtube\.com\/embed\//.test(element.getAttribute('src')) && !element.hasAttribute('data-keepplaying')){
                    element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
                }
            });
        }