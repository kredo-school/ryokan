// // banner
$(function () {
  $("#open").click(function () {
    $("#myNav").css("width", "100%");
  });
  $("#close").click(function () {
    $("#myNav").css("width", "0");
  });
  function auto_slide() {
    interval = setInterval(function () {
      moveRight();
    }, 3000);
  }

  auto_slide();
  $("#banner ul li").hover(function () {
    clearInterval(interval);
  });
  $("#banner ul li").mouseleave(function () {
    auto_slide();
  });

  var sliderWidth = $("#banner ul li").width("100%");
  var sliderHeight = $("#banner ul li").height();
  var sliderCount = $("#banner ul li").length;

  var sliderUIWidth = sliderWidth * sliderCount;

  $("#banner").css({ width: sliderWidth, height: sliderHeight });
  $("#banner ul").css({
    width: sliderUIWidth,
    height: sliderHeight,
    marginLeft: -sliderWidth,
  });

  $("#banner ul li").last().prependTo("#banner ul");

  function moveLeft() {
    $("#banner ul").animate({ left: sliderWidth }, "slow", function () {
      $("#banner ul li").last().prependTo("#banner ul");
      $("#banner  ul").css("left", "0");
    });
  }
  function moveRight() {
    $("#banner ul").animate(
      {
        left: -sliderWidth,
      },
      "slow",
      function () {
        $("#banner ul li").first().appendTo("#banner ul");
        $("#banner  ul").css("left", "0");
      }
    );
  }
  $("a.control_prev").click(function () {
    moveLeft();
  });

  $("a.control_next").click(function () {
    moveRight();
  });

  // --rooms modal--
  $("#detail1").click(function () {
    $("#toggle_s").fadeIn("fast");
  });
  // $("#sakura").mouseleave(function () {
  //   $("#toggle_s").fadeOut("fast");
  // });

  $("#detail2").click(function () {
    $("#toggle_k").fadeIn("fast");
  });
  // $("#kaede").mouseleave(function () {
  //   $("#toggle_k").fadeOut("fast");
  // });
  // $("#close2").click(function () {
  //   $(".toggle").css("display", "none");
  // });
  $("#detail3").click(function () {
    $("#toggle_f").fadeIn("fast");
  });
  // $("#fuji").mouseleave(function () {
  //   $("#toggle_f").fadeOut("fast");
  // });
  $("#detail4").click(function () {
    $("#toggle_t").fadeIn("fast");
  });
  // $("#tsubaki").mouseleave(function () {
  //   $("#toggle_t").fadeOut("fast");
  // });
  $("#closeSakura").click(function () {
    $(".toggleSakura").css("display", "none");
  });
  // console.log("welcome");
  $("#closeKaede").click(function () {
    $(".toggleKaede").css("display", "none");
  });
  $("#closeFuji").click(function () {
    $(".toggleFuji").css("display", "none");
  });
  $("#closeTsubaki").click(function () {
    $(".toggleTsubaki").css("display", "none");
  });
  // ---end---
});
