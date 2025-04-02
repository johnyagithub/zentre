$(function() {
 
 (function(e) {
  e.fn.visible = function(t, n, r) {
   var i = e(this).eq(0),
      s = i.get(0),
      o = e(window),
      u = o.scrollTop(),
      a = u + o.height(),
      f = o.scrollLeft(),
      l = f + o.width(),
      c = i.offset().top,
      h = c + i.height(),
      p = i.offset().left,
      d = p + i.width(),
      v = t === true ? h : c,
      m = t === true ? c : h,
      g = t === true ? d : p,
      y = t === true ? p : d,
      b = n === true ? s.offsetWidth * s.offsetHeight : true,
      r = r ? r : "both";
   if (r === "both")
      return !!b && m <= a && v >= u && y <= l && g >= f;
   else if (r === "vertical")
      return !!b && m <= a && v >= u;
   else if (r === "horizontal")
      return !!b && y <= l && g >= f
  }
 })(jQuery)

 $(window).scroll(function(event) {
 	for(i=$('header ul.navbar-nav a.nav-link').length;i>=1;i--){
   $("#s"+i).each(function() {
    if ($("#home").visible(true)) {
     $('header ul.navbar-nav a.nav-link').removeClass('active');
    } else if ($("#s"+i).visible(true)) {
     $('header ul.navbar-nav a.nav-link').removeClass('active');
     $('header ul.navbar-nav a.nav-link[href="#s'+i+'"]').addClass('active');
    }
   });
 	}
 });
    
	$("a[href*='#']").click(function(){
		ScrollTop($(this).attr("href"));
	});

 $('.navbar-toggler[data-target="#navbarNav"]').click(function() {
  if ($('#navbarNav.show').length >= 1) {
   $('body').removeClass('NavActive');
  }else{
   $('body').addClass('NavActive');
  }
 });
 $('header .navbar-collapse+.box-shadow').click(function() {
  $('header button.navbar-toggler').click();
 });
 $(document).on("click","body.NavActive header nav.navbar li.nav-item a",function() {
  $('header button.navbar-toggler').click();
 });

	sliderBanner();
	sliderItem();
 aos();
 
});
let ScrollTop = (index) => {
	$("html,body").animate({
		scrollTop:$(index).offset().top-$('header').height()
	},"1000");
	return false;
}

let sliderBanner = () => {
	$(".box-banner .owl-carousel").owlCarousel({
		loop:true,
		nav:true,
		dots:true,
		lazyLoad:true,
		autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:false,
		navText: ["<i class=\"las la-angle-left\"></i>","<i class=\"las la-angle-right\"></i>"],
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
		},
		afterAction: function(current) {
	  current.find('video').get(0).play();
	 }
	});
 $('.box-banner .owl-carousel .owl-item').on('mouseenter',function(e){
		$(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
	});
	$('.box-banner .owl-carousel .owl-item').on('mouseleave',function(e){
		$(this).closest('.owl-carousel').trigger('play.owl.autoplay',[3000]);
	});
}
let sliderItem = () => {
 $(".box-slide .owl-carousel").each(function(){
 	$(this).owlCarousel({
 		margin:10,
 		nav:false,
 		dots:true,
 		lazyLoad:true,
 		autoplay:true,
   autoplayTimeout:5000,
   autoplayHoverPause:false,
 		responsiveClass:true,
 		responsive:{
 			0:{
 				items:$(this).attr('data-itemSlide-mobile') || 2
 			},
 			667:{
 				items:$(this).attr('data-itemSlide-Tablet') || 3
 			},
 			900:{
 				items:$(this).attr('data-itemSlide-pc') || 4
 			}
 		}
 	});
 });
 $('.box-slide .owl-carousel .owl-item').on('mouseenter',function(e){
		$(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
	});
	$('.box-slide .owl-carousel .owl-item').on('mouseleave',function(e){
		$(this).closest('.owl-carousel').trigger('play.owl.autoplay',[3000]);
	});
}
function aos() {
 AOS.init({
  once: true,
  duration: 1000,
  easing: 'ease-in-sine',
 });
}
