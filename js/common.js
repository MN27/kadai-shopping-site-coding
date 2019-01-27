$(document).ready(function(){
  // index.htmlのカルーセル
  $(".owl-carousel").owlCarousel(
    {
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      autoplay: true
    }
  );
  
  // メニューボタントグル
  $('#menu_button').click(function() {
    $('#sp_menu').slideToggle();
    return false;
  });
  
  // products.htmlのスライド
  $('.thumb-item img').click(function() {
    //classにgrayがあるものは表示させたくないのでreturn
    if ($(this).hasClass('gray')) {
      return;
    }
    var img_src = $(this).attr('src');
    $('.main img').attr('src', img_src);
  });
});