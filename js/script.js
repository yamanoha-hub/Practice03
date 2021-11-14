'use strict';

$(function() {
  // メニューバー
  $(".hamburger").click(function() {
    $(this).toggleClass('hamburger__active');
  });

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

  // フォームのprivacyCheckチェックさせる。
  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      // 指定したinputが空なのかチェック
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      //privacyCheckにチェック入っているか確認
      $('#form #privacyCheck').prop('checked') === true
    ) {
      // 空欄ではないならdisabledをはずす。(""が空の部分)
      $submitBtn.prop('disabled', false);
      
    } else {
      // disabled付く(送信できない)
      $submitBtn.prop('disabled', true);
    }
  });

  // 完了メッセージ 送信
  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScYsvRFEyMDy6oXsaGvthp2ZMfN-WZp6JUu7sYLzoPNIHk1JQ/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });
});