$(function() {
  $(".mice_data .item .num span")
    .each(function() {
      var $this = $(this),
        countTo = $this.attr(
          "data-count");
      $({
        countNum: $this
        .text(),
      }).animate({
        countNum: countTo,
      }, {
        duration: 5000,
        easing: "linear",
        step: function() {
          $this.text(Math
            .floor(this
              .countNum));
        },
        complete: function() {
          $this.text(this
            .countNum);
          //alert('finished');
        },
      });
    });
  // for Demo load components
  $(".slider-marquee ul").slick({
    slidesToShow: 3,
    centerMode: true,
    pauseOnHover: true,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    speed: 500,
    asNavFor: ".award-img",
  });
  $(".award-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-marquee ul",
  });
  
  
});

$(document).ready(function() {
  if ($(".mt-city-tab").length >0) {
    //content mt-city-tab
    // Variables
    var clickedTab = $(
      ".city .tabs > .active");
    var tabWrapper = $(
      ".city .tab__content");
    var activeTab = tabWrapper.find(
      ".active");
    var activeTabHeight = activeTab
      .outerHeight();
    // Show tab on page load
    activeTab.show();
    // Set height of wrapper on page load
    tabWrapper.height(
      activeTabHeight);
    $(".city .tabs > li").on(
      "click",
      function() {
        // Remove class from active tab
        $(".city .tabs > li")
          .removeClass("active");
        // Add class active to clicked tab
        $(this).addClass(
        "active");
        // Update clickedTab variable
        clickedTab = $(
          ".city .tabs .active");
        // fade out active tab
        activeTab.fadeOut(250,
          function() {
            // Remove active class all tabs
            $(".city .tab__content > li")
              .removeClass(
                "active");
            // Get index of clicked tab
            var
              clickedTabIndex =
              clickedTab
            .index();
            // Add class active to corresponding tab
            $(".city .tab__content > li")
              .eq(
                clickedTabIndex)
              .addClass(
                "active");
            // update new active tab
            activeTab = $(
              ".city .tab__content > .active"
              );
            // Update variable
            activeTabHeight =
              activeTab
              .outerHeight();
            // Animate height of wrapper to new tab height
            tabWrapper.stop()
              .delay(50)
              .animate({
                  height: activeTabHeight,
                }, 500,
                function() {
                  // Fade in active tab
                  activeTab
                    .delay(50)
                    .fadeIn(
                    250);
                });
          });
      });
  }
  

               
            
            
  
  
});