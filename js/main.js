$(document).ready(function () {
  $(".news-slider").slick({
    arrows: true,
    dots: true,
    prevArrow: ".left-arrow",
    nextArrow: ".right-arrow",
  });
  $(".banner-slider").slick({
    arrows: false,
    dots: true,
  });

  //toggle dropdown
  $(".dropdown").click(function () {
    if ($("> .dropdown-menu", this).hasClass("active")) {
      $(".dropdown-menu").removeClass("active");
      $(".dropdown > a > img").removeClass("active");
    } else {
      $(".dropdown-menu").removeClass("active");
      $("> .dropdown-menu", this).toggleClass("active");
      $(".dropdown > a > img").removeClass("active");
      $("> a > img", this).toggleClass("active");
    }
  });

  //toggle navbar
  $("#toggle-nav").click(function () {
    $(".navbar").toggleClass("active");
    $("body").toggleClass("fixed");
    if ($(".navbar").hasClass("active")) {
      $('#toggle-nav img').attr('src', './img/menu-close.png');
    }else{
      $('#toggle-nav img').attr('src', './img/menu-icon.png');
    }
  });

  $("#servicetab1").click(function () {
    $("#servicetabcontent2").removeClass("active");
    $("#servicetab2").removeClass("active");
    $("#servicetabcontent1").addClass("active");
    $("#servicetab1").addClass("active");
  });
  $("#servicetab2").click(function () {
    $("#servicetabcontent1").removeClass("active");
    $("#servicetab1").removeClass("active");
    $("#servicetabcontent2").addClass("active");
    $("#servicetab2").addClass("active");
  });
});
