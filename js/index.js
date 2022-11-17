$(document).ready(function() {
  let $content1 = $(".content1").hide();
  $(".toggle1").click(function() {
    $content1.slideToggle();
  });
  let $content2 = $(".content2").hide();
  $(".toggle2").click(function() {
    $content2.slideToggle();
  });
  let $content3 = $(".content3").hide();
  $(".toggle3").click(function() {
    $content3.slideToggle();
  });
  let $content4 = $(".content4").hide();
  $(".toggle4").click(function() {
    $content4.slideToggle();
  });
  let $content5 = $(".content5").hide();
  $(".toggle5").click(function() {
    $content5.slideToggle();
  });
  let $content6 = $(".content6").hide();
  $(".toggle6").click(function() {
    $content6.slideToggle();
  });
  let $content7 = $(".content7").hide();
  $(".toggle7").click(function() {
    $content7.slideToggle();
  });
  let $content8 = $(".content8").hide();
  $(".toggle8").click(function() {
    $content8.slideToggle();
  });
  let $content9 = $(".content9").hide();
  $(".toggle9").click(function() {
    $content9.slideToggle();
  });
  let $menutoggle;
  if (window.innerWidth <= 480) {
    $menutoggle = $(".menu-items").hide();
  } else {
    $menutoggle = $(".menu-items").show();
  }
  $(".menu").click(function() {
    $menutoggle.slideToggle();
    $(".menu-icon").toggleClass("menu-icon-up");
  });
});
function togglemenu() {
  if (window.innerWidth <= 480) {
    $menutoggle = $(".menu-items").hide();
  } else {
    $menutoggle = $(".menu-items").show();
  }
}
function redirect(url) {
    window.location.href = `${window.location.origin}/${url}`;
}
