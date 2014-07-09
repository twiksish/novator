/*
 * Placeholder fix init
 */

$(document).on('ready', function(){
    $('.no-placeholder input[placeholder], .no-placeholder textarea[placeholder]').placeholder();

    $('.phones__handler').on('click',function(){
        $('.phones__list').fadeToggle();
    });

    $(".nav__item").on('mouseover', function(){
        $(this).children('.nav__item__pin').css('display','block');
    });
    $(".nav__item").on('mouseout', function(){
        $(this).children('.nav__item__pin').css('display','none');
    });

});
