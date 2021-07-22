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
