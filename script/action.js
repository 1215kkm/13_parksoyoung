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

$('.screen').mouseover(function(){
    let imgH = $(this).find('img').height();
    let scrH = $(this).height();

    $(this).find('img').css({top:- imgH + scrH})
}).mouseout(function(){
    $(this).find('img').css({top:0})
});