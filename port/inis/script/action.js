$(document).ready(function(){
    $('header').load('include/header.html' ,function(){
        $('html').click(function(e) {
            console.log(e.target)
    
            if (!$(e.target).hasClass('choice')) {
                $('.language').hide();
            }
        });
        
        
        $('.lang').click(function(e){
            $('.language').toggle();
        });
    
        $('.language li').click (function(){
            let langChoice = $(this).text();                   
            $('.choice').text (langChoice)
        });
    
        /*로고이미지 src 값 글자변경*/
    
    
    
        $(window).scroll(function(){
            let scrT = $(window).scrollTop();
            console.log(scrT)
    
            // $('#visual').css({backgroundSize:100+scrT/10+'%'})
            // $('#visual .model').css({top:100-scrT*2+'px'})
    
    
            // if(scrT >= 100){
            //     $('header nav').css({marginTop:0, pasition:'fixed',top:0})
            // 헤더 같이 내려오게}
    
            // if(scrT >=136){
            //     $('header nav').addClass('on')
            // } else {
            //     $('header nav').removeClass('on')
            // }
    
        });
    
    
    
    
        /*notice 롤링*/
        // let kkk = setInterval( 함수,반복시간 )
        // clearInterval( kkk )
    
        // let mmm = setTimeout(함수,예약시간)
        // clearTimeout(mmm)
    
        let notiRoll = setInterval(noticeRolling,2000)
    
        noticeRolling()
        function noticeRolling(){
            $('.notice ul').animate({top:'-100%'}, function(){
                $('.notice ul li').eq(0).appendTo($('.notice ul'))
                $('.notice ul').css({top:0})
            })
        }
       
        $('.notice').mouseenter(function(){
            clearInterval(notiRoll)
        });
        $('.notice').mouseleave(function(){
           notiRoll = setInterval(noticeRolling,2000)
        })
    
    
    
    
    
    }); 

    })
    
    
    




