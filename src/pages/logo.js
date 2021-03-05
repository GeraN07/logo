$('.page-header__button-price').click(function() {
    $('.price-block').addClass('active');
    $('.page-header__button-price').addClass('active');
    $('.page-kp-block').removeClass('active');
    $('.description-block').removeClass('active');
    $('.page-header__button-description').removeClass('active');
    $('.page-header__button-kp').removeClass('active');
    $('.animation-block__item1').removeClass('active');
    $('.animation-block__item2').removeClass('active');
    $('.animation-block__item4').removeClass('active');
    $('.animation-block__item3').removeClass('active');
})
$('.page-header__button-kp').click(function() {
    $('.page-kp-block').addClass('active');
    $('.page-header__button-kp').addClass('active');
    $('.price-block').removeClass('active');
    $('.description-block').removeClass('active');
    $('.page-header__button-price').removeClass('active');
    $('.page-header__button-description').removeClass('active');
    $('.animation-block__item4').addClass('active');
    $('.animation-block__item3').addClass('active');
    $('.animation-block__item1').removeClass('active');
    $('.animation-block__item2').removeClass('active');
})
$('.page-header__button-description').click(function() {
    $('.description-block').addClass('active');
    $('.page-header__button-description').addClass('active');
    $('.price-block').removeClass('active');
    $('.page-kp-block').removeClass('active');
    $('.page-header__button-price').removeClass('active');
    $('.page-header__button-kp').removeClass('active');
    $('.animation-block__item1').addClass('active');
    $('.animation-block__item2').addClass('active');
    $('.animation-block__item4').addClass('active');
    $('.animation-block__item3').addClass('active');
})
    $('#price').bind('mousewheel', function(e){
        if($('.price-block__price-table-block').is(":hover")){
            $('.price-block').addClass('active');
        }
        else if(e.originalEvent.wheelDelta /120 < 0){
            $('.page-kp-block').addClass('active');
            $('.price-block').removeClass('active');
            $('.animation-block__item4').addClass('active');
    $('.animation-block__item3').addClass('active');
    $('.animation-block__item1').removeClass('active');
    $('.animation-block__item2').removeClass('active');
    $('.page-header__button-price').removeClass('active');
    $('.page-header__button-kp').addClass('active');
        }
        else{
            $('.price-block').addClass('active');
        }
    });

    $('#kp').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 < 0) {
            $('.description-block').addClass('active');
            $('.page-kp-block').removeClass('active');
            $('.animation-block__item1').addClass('active');
            $('.animation-block__item2').addClass('active');
            $('.animation-block__item4').addClass('active');
            $('.animation-block__item3').addClass('active');
            $('.page-header__button-kp').removeClass('active');
            $('.page-header__button-description').addClass('active');
        }
        else{
            $('.price-block').addClass('active');
            $('.page-kp-block').removeClass('active');
            $('.animation-block__item1').removeClass('active');
    $('.animation-block__item2').removeClass('active');
    $('.animation-block__item4').removeClass('active');
    $('.animation-block__item3').removeClass('active');
    $('.page-header__button-price').addClass('active');
    $('.page-header__button-kp').removeClass('active');
        }
    });
    $('#desc').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 < 0) {
            $('.description-block').addClass('active');
        }
        else{
            $('.page-kp-block').addClass('active');
            $('.description-block').removeClass('active');
            $('.animation-block__item4').addClass('active');
    $('.animation-block__item3').addClass('active');
    $('.animation-block__item1').removeClass('active');
    $('.animation-block__item2').removeClass('active');
    $('.page-header__button-kp').addClass('active');
    $('.page-header__button-description').removeClass('active');
        }
    });

    $('.page-header__burger-button').click(function() {
        $('.page-header__navbar-block').toggleClass('active');
        $('.page-header__burger-button').toggleClass('active');
        });