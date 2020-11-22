$(function() {
  // アコーディオン
 $('.l-main_qa_wrapper').click(function(){
  var $answer = $(this).next('.l-main_qa_answer')
  var $uparrow = $(this).find('.l-main_qa_uparrow')
  var $downarrow = $(this).find('.l-main_qa_downarrow')
  
    if($answer.hasClass('open')){
      $answer.slideUp(300);
      $answer.removeClass('open');

      $downarrow.removeClass('none');
      $uparrow.removeClass('open');

    }else {
      $answer.slideDown(300);
      $answer.addClass('open');

      $downarrow.addClass('none');
      $uparrow.addClass('open');
   }
   });
   // アコーディオン

// トップへ戻る
   var pagetop = $('.l-footer_scroll');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
  // トップへ戻る
 });





