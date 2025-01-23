// body,top-img フェードイン
jQuery("body").fadeIn(1000);
jQuery(".top-img").fadeIn(2000);

// header titleクリックでtopに移動
jQuery(".header-title").click(function () {
  jQuery("html,body").animate({scrollTop:0},500);
});

jQuery(".header-title-sp").click(function () {
  jQuery("html,body").animate({scrollTop:0},500);
});


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


// 各セクション 画面に表示されたら表示（Y50px）

jQuery(function(){
  jQuery(".About").on("inview",function(){
    jQuery(this).addClass("fade-in");
  });
});


jQuery(function(){
  jQuery(".Skill").on("inview",function(){
    jQuery(this).addClass("fade-in");
  });
});

jQuery(function(){
  jQuery(".Skill-sp").on("inview",function(){
    jQuery(this).addClass("fade-in");
  });
});

jQuery(function(){
  jQuery(".Portfolio").on("inview",function(){
    jQuery(this).addClass("fade-in");
  });
});
