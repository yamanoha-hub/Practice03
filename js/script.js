'use strict';

$(function() {
  // スムーススクロール
  $('a[href^="#contact"]').click(function() {
    var target = $($(this).attr("href")).offset().top; //href属性の取得
    target -= 94;

    $("html, body").animate({scrollTop: target}, 800);

    return false;
  });


  // アコーディオン
  $('.accordion__ttl').click(function() {
    // if(!$(this).hasClass("accordion__body--active")) {
      $(this).next().slideToggle();      
      
      return false;
    // }
  });

});