import $ from 'jquery';


$(function () {
    $('.list-item:first').on('mouseenter', function () {
        $(this).toggleClass('active');

    }).on("mouseleave", function () {
        $(this).toggleClass('active');
    });

        // $('.list-item:eq(2)').on('click', function(){
        //     $('.image:even').fadeToggle('slow');
        // });
    $('.list-item:eq(2)').on('click', function(){
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function(){
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);
    });

});