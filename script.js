$(function() {
    var nav = $('.nav');
    //navの位置
    var navTop = nav.offset().top;
    //スクロールするたびに実行
    $(window).scroll(function () {
        var winTop = $(this).scrollTop();
        //スクロール位置がnavの位置より下だったらクラスfixedを追加
        if (winTop >= navTop) {
            nav.addClass('fixed')
        } else if (winTop <= navTop) {
            nav.removeClass('fixed')
        }
    });

    $(function() {
      $('.slick2-img').slick({
        centerMode: true,
        centerPadding: '9%',
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow:3,
      });
    });
    $(function() {
      $('.slick3-img').slick({
        centerMode: true,
        centerPadding: '22%',
        autoplay: true,
        autoplaySpeed: 10000,
      });
    });
    $('.humber').click(function(){
      $('.modal').slideToggle();
      $('.modal').toggleClass('cross')
      if($('.modal').hasClass('cross')){
        $('.humber').html('<i class="fas fa-times"></i>');
      }else{
        $('.humber').html('<i class="fas fa-bars"></i>');
      }
    });

      $('.slick1-img').slick({
        centerMode: true,
        centerPadding: '23%',
        autoplay: true,
        autoplaySpeed: 10000
      });
      $('.slick4-img').slick({
        centerMode: true,
        centerPadding: '20%',
        autoplay: true,
        autoplaySpeed: 4000,
        variableWidth: true,
        arrows:false
      });
      $('.slick5-img').slick({
        centerMode: true,
        centerPadding: '20%',
        autoplay: true,
        autoplaySpeed: 4000,
        variableWidth: true,
        arrows:false
      });
      $('.slick6-img').slick({
        centerMode: true,
        centerPadding: '20%',
        autoplay: true,
        autoplaySpeed: 4000,
        variableWidth: true,
        arrows:false
      });
      $('.back').click(function(){
        $('html,body').animate({
          scrollTop:0
        },500);
      });

});
