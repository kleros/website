import $ from "jquery";
import ca_animator from "./ca_animator.0.1.6.js";
//import ca_slick from './slick.js'
import ca_imagesloaded from "./imagesloaded.pkgd.js";

export default function ca_script() {
  ca_animator();
  //ca_slick();
  ca_imagesloaded();
  $(document).ready(function() {
    //mark_all_bgs()
    $("h1, h2, h3, h4, h5, h6, p").nbsp();
    /*$('body').addClass('ca_preload');
		$('.ca_bg_exists, img').imagesLoaded({ background: true }, function(){
			$('body').removeClass('ca_preload');
			$('body').addClass('ca_preloaded');
		});*/

    // $(".ca_solution_slider").slick({
    //   dots: true,
    //   arrows: false,
    //   infinite: true,
    //   autoplay: true,
    //   autoplaySpeed: 3000,
    //   speed: 300,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   appendDots: ".ca_solution_slider_dots"
    // });
    //
    // $(".ca_team_slider").slick({
    //   dots: false,
    //   arrows: true,
    //   infinite: true,
    //   autoplay: false,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   centerMode: true,
    //   centerPadding: "0px",
    //   appendArrows: ".ca_team_slider_arrows",
    //   responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         slidesToShow: 1
    //       }
    //     }
    //   ]
    // });

    $(".ca_header nav .ca_hamburger").click(function() {
      if ($(".ca_header").hasClass("ca_menu_opened"))
        $(".ca_header").removeClass("ca_menu_opened");
      else $(".ca_header").addClass("ca_menu_opened");
      return false;
    });

    $(".ca_open_video_popup").click(function() {
      var url = $(this).data("video-url");
      var gets = url.match(/v=(.*?)(&|$)/);
      var video_id = gets[1] ? gets[1] : false;
      if (video_id != false) {
        $(".ca_video_holder")
          .find("iframe")
          .attr("src", "https://www.youtube.com/embed/" + video_id);
        $(".ca_video_popup").addClass("ca_shown");
      }
      return false;
    });

    $(".ca_video_popup a.ca_close").click(function() {
      $(".ca_video_popup").removeClass("ca_shown");
      $(".ca_video_holder")
        .find("iframe")
        .attr("src", "https://www.youtube.com/embed/");
      return false;
    });

    $.ca_animator([
      {
        element: "body", // jQuery selector
        boundaries: "both", // both, top (makes it infinitely long till the bottom), or bottom (makes it infinitely long till the top) default (both)
        animations: [
          // Array of actions attached to the detector of the given element
          {
            action: function(params) {
              if ($(".ca_paralax_background_illustration").length) {
                var val = params.probePercent.top;
                var top1 = (1 - val) * 0.15;
                var top2 = (1 - val) * -0.0025;
                var top3 = (1 - val) * 0.07;
                var top4 = (1 - val) * 0.03;
                params.element
                  .find(".ca_paralax_background_illustration span")
                  .eq(0)
                  .css({
                    //+
                    marginTop: top1 + "em"
                  });
                params.element
                  .find(".ca_paralax_background_illustration span")
                  .eq(1)
                  .css({
                    transform: "scale(" + (1 - top2) + ", " + (1 - top2) + ")"
                  });
                params.element
                  .find(".ca_paralax_background_illustration span")
                  .eq(2)
                  .css({
                    //+
                    marginTop: top3 + "em"
                  });
                params.element
                  .find(".ca_paralax_background_illustration span")
                  .eq(3)
                  .css({
                    marginTop: top4 + "em",
                    transform:
                      "scale(" +
                      (1 + top4 * 0.03) +
                      ", " +
                      (1 + top4 * 0.03) +
                      ")"
                  });
              }
            },
            probe: 0,
            min: 0,
            max: 1
          }
        ]
      }
      /*{
				element: 'section, header',
				boundaries: 'top',
				animations: [
					{
						action: function(params) {
							if(params.percent >= 20 && !params.element.hasClass('ca_loaded')) params.element.addClass('ca_loaded');
							if(params.percent < 20 && params.element.hasClass('ca_loaded')) params.element.removeClass('ca_loaded');
						}
					}
				]
			}*/
    ]);
  });

  function mark_all_bgs() {
    var tags = document.getElementsByTagName("*"),
      el;

    for (var i = 0, len = tags.length; i < len; i++) {
      el = tags[i];
      if (el.currentStyle) {
        if (el.currentStyle["backgroundImage"] !== "none")
          el.className += " ca_bg_exists";
      } else if (window.getComputedStyle) {
        if (
          document.defaultView
            .getComputedStyle(el, null)
            .getPropertyValue("background-image") !== "none"
        )
          el.className += " ca_bg_exists";
      }
    }
  }

  $.fn.nbsp = function() {
    this.each(function() {
      buddySystem($(this).get(0));
    });
  };

  //Put &nbsp; between two last words (https://stackoverflow.com/a/21031389/5645836)
  var buddySystem = function(e) {
    var n = [],
      r = [];
    // eslint-disable-next-line no-unused-expressions
    (n = e.length ? e : n.concat(e)),
      Array.prototype.map.call(n, function(e) {
        var n = String(e.innerHTML);
        // eslint-disable-next-line no-unused-expressions
        (n = n.replace(/\s+/g, " ").replace(/^\s|\s$/g, "")),
          r.push(
            n
              ? (e.innerHTML = n.replace(
                  new RegExp(
                    "((?:[^ ]* ){" +
                      ((n.match(/\s/g) || 0).length - 1) +
                      "}[^ ]*) "
                  ),
                  "$1&nbsp;"
                ))
              : void 0
          );
      });
  };
}
