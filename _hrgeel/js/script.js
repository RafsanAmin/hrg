$(".dmenu").hide();
drp();
$(window).resize(drp);

function drp() {
  let x = $(window).width();
  if (x < 991) {
    $(".drop").unbind("mouseenter mouseleave");
    $(".navbar-toggler")
      .unbind()
      .click(function () {
        $(".dmenu").slideUp(1);
        console.log("slided");
      });
    $(".dropdown_toggler")
      .unbind()
      .click(function () {
        $(".dmenu").stop().slideToggle(400);
        $("#arr").toggleClass("rot");
        console.log("slided");
      });
  } else {
    $(".drop").hover(
      function () {
        $(".carousel").addClass("zi-1");
        $(".dmenu").stop().slideDown(400);
        console.log("slided");
      },
      function () {
        $(".dmenu")
          .stop()
          .slideUp(400, function () {
            $(".carousel").removeClass("zi-1");
          });
      },
    );
  }
}
