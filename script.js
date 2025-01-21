// body,top-img フェードイン
jQuery("body").fadeIn(1000);
jQuery(".top-img").fadeIn(3000);

// 1640px Menu表示
jQuery("#js-menu").click(function(){
  jQuery(".menu-2").toggleClass("is-checked");
  jQuery(".menu-list").slideToggle(300);
})



// top-btn 表示・非表示
jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 200) {
    jQuery(".top-btn").fadeIn(300);
  } else {
    jQuery(".top-btn").fadeOut(300);
  }
});

// top-btn クリック
jQuery(".top-btn").click(function () {
  jQuery("html,body").animate({scrollTop:0},500);
});
