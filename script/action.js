$(window).scroll(function(){
    let scrT = $(window).scrollTop()
    if(scrT){
        $('h1').addClass('on')
    } else {
        $('h1').removeClass('on')
    }
    console.log('kds')
})


$('#section4 article .content li figure').mouseout(function(){
    $(this).parent().siblings('.view_proj').css({right:30, bottom:30, top:'auto', left:'auto'});
})

$('#section4 article .content li, .banner_box li').mousemove(function(e){
    let mX = e.pageX;
    let mY = e.pageY;
    let parentLiTop = $(this).offset().top;
    let parentLiLeft = $(this).offset().left;
    // let aW = $('.view_proj').width();
    // let aH = $('.view_proj').height();

    $(this).find('.view_proj').css({right:'auto', left:mX - parentLiLeft - 90, bottom:'auto', top:mY - parentLiTop - 20, opacity:1})
}).mouseout(function(){
    $('.view_proj').css({opacity:0})
});


// $('.view_proj').mouseover(function(){
//     setTimeout(function(){
//         $(this).css({pointerEvents: 'fill', background:'red'})
//     },1000)
    
// })


$('.list li').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    let imgSrc = $(this).find('img').attr('src');
    let imgColor = $(this).find('img').attr('data-color');

    $('.view .web img').attr('src', imgSrc);
    // $('.view .mobile img').attr('src', imgSrc.replace('.jpg', '_mo.jpg'));

    $('.view').scrollTop(0)
    $('.list').css({background:imgColor})
})

$('.menu').click(function(){
    // window.close()
    // window.resizeTo(500,500) 
    history.back();
})



// web1에 관련된 부분 상세페이지 관련부분

// $('.list li').off('click').on('click', function () {
//     // 클릭한 항목 활성화
//     $(this).addClass('on').siblings().removeClass('on');
    
//     // 클릭한 이미지 정보 가져오기
//     let imgSrc = $(this).find('img').attr('src'); // 이미지 경로
//     let imgColor = $(this).find('img').attr('data-color'); // 배경색

//     // 이미지 변경
//     $('.view .web1 img').attr('src', imgSrc);

//     // 배경색 변경
//     $('.list').css({ background: imgColor });

//     // 상단으로 스크롤 (필요 시)
//     $('.view').scrollTop(0);
// });







// $('.screen').mouseover(function(){
//     let imgH = $(this).find('img').height();
//     let scrH = $(this).height();

//     $(this).find('img').css({top:- imgH + scrH})
// }).mouseout(function(){
//     $(this).find('img').css({top:0})
// });
$('.screen').mouseover(function(){
    let $img = $(this).find('img');
    let imgH = $img.height();
    let scrH = $(this).height();

    $img.stop().animate({top: -imgH + scrH}, 700); // 500은 애니메이션의 속도를 나타내는데, 조절 가능합니다.
}).mouseout(function(){
    let $img = $(this).find('img');
    $img.stop().animate({top: 0}, 600); // 마우스 아웃 시 빠르게 이미지를 원래 위치로 이동하도록 설정하였습니다.
});