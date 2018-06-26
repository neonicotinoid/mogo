
var acc = document.getElementsByClassName("accordion"),
    panels = document.querySelectorAll('.panel'),
    i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    for (var y = 0; y < panels.length; y++) {
      panels[y].classList.remove('active-panel');
      acc[y].classList.remove('active');
    };
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    panel.classList.toggle("active-panel");
  });
}

$(document).ready(function ($) {
  acc[0].classList.add('active');
  panels[0].classList.add('active-panel');
});



$(function(){

  $('.menu-control').on('click', function() {
     $('.main-menu').slideToggle(300, function(){
          if( $(this).css('display') === "none"){
              $(this).removeAttr('style');
          }
     });

  });

});



$('.testimonial-track').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 3000,
  prevArrow: '<button type="button" class="slick-prev slick-prev-testimonial">  </button>',
  nextArrow: '<button type="button" class="slick-next slick-next-testimonial">  </button>', 
  responsive: [
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        arrows: true,
      }
    },
  ]
});

$('.testimonial-track-second').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: '<button type="button" class="slick-prev slick-prev-testimonial">  </button>',
  nextArrow: '<button type="button" class="slick-next slick-next-testimonial">  </button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        dots: false,
      }
    },
  ]
});

$('.sl-wrapper').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  pauseOnFocus: true,
  customPaging : function(slider, i) {
    var title = $(slider.$slides[i]).data('title');
    return '<a class="pager__item"> '+title+' </a>';
},
responsive: [
  {
    breakpoint: 768,
    settings: {
      infinite: true,
      arrows: false,
    }
  },
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});