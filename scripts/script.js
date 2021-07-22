$('.navbar__menu_m').click(function() {
    $(this).hide();
    $('.menuShadowbox').show(200);
    $('.mobNavbar__ul').show();
    $('.navbar__close_m').show(500);
});

$('.navbar__close_m').click(function() {
    $('.menuShadowbox').hide(200);
    $(this).hide(200);
    $('.mobNavbar__ul').hide(200);
    $('.navbar__menu_m').show(500);
});

$('.mobNavbar__ul .navbar__link').click(function() {
    $('.menuShadowbox').hide(200);
    $('.mobNavbar__ul').hide(200);
    $('.navbar__menu_m').show(500);
});

$('.work__navArrow_right').click(function() {
    let numb = parseInt($('.work__navNow').html());
    if(numb < 12){
        numb++;
        if(numb == 2){
            $('.work__navArrow_left').removeClass('work__navArrow_left_disabled');
        }
        if(numb == 12){
            $('.work__navNow').html(numb);
            $('.work__navArrow_right').addClass('work__navArrow_right_disabled');
        }else{
            $('.work__navNow').html(numb);
        }
        $('.work__img').removeClass('active');
        $('.work__img').eq(--numb).addClass('active');
        let img_src = $('.work__img').eq(numb).attr("src");
        $('.work').css({"background":"linear-gradient(0deg, rgba(26, 26, 26, 0.76), rgba(26, 26, 26, 0.76)), url("+img_src+"), #C4C4C4","backgroundSize":"cover","backgroundPosition":"center"});
    }
});

$('.work__navArrow_left').click(function() {
    let numb = parseInt($('.work__navNow').html());
    if(numb > 1){
        numb--;
        if(numb == 11){
            $('.work__navArrow_right').removeClass('work__navArrow_right_disabled');
        }
        if(numb == 1){
            $('.work__navNow').html(numb);
            $('.work__navArrow_left').addClass('work__navArrow_left_disabled');
        }else{
            $('.work__navNow').html(numb);
        }
        $('.work__img').removeClass('active');
        $('.work__img').eq(--numb).addClass('active');
        let img_src = $('.work__img').eq(numb).attr("src");
        $('.work').css({"background":"linear-gradient(0deg, rgba(26, 26, 26, 0.76), rgba(26, 26, 26, 0.76)), url("+img_src+"), #C4C4C4","backgroundSize":"cover","backgroundPosition":"center"});
    }
});

$('.gallery__navArrow_right').click(function() {
    let numb = parseInt($('.gallery__navNow').html());
    if(numb < 3){
        numb++;
        if(numb == 3){
            $('.gallery__navArrow_left').removeClass('gallery__navArrow_left_disabled');
        }
        if(numb == 3){
            $('.gallery__navNow').html(numb);
            $('.gallery__navArrow_right').addClass('gallery__navArrow_right_disabled');
        }else{
            $('.gallery__navNow').html(numb);
        }
        $('.gallery__item').removeClass('active');
        $('.gallery__item').eq(--numb).addClass('active');
    }
});

$('.gallery__navArrow_left').click(function() {
    let numb = parseInt($('.gallery__navNow').html());
    if(numb > 1){
        numb--;
        if(numb == 2){
            $('.gallery__navArrow_right').removeClass('gallery__navArrow_right_disabled');
        }
        if(numb == 1){
            $('.gallery__navNow').html(numb);
            $('.gallery__navArrow_left').addClass('gallery__navArrow_left_disabled');
        }else{
            $('.gallery__navNow').html(numb);
        }
        $('.gallery__item').removeClass('active');
        $('.gallery__item').eq(--numb).addClass('active');
    }
});