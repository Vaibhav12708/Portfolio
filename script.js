/* Please ❤ this if you like it! */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	
	//Travel portfolio page
	
	$(".travel").on('click', function () {
		$("body").addClass("travel-on");
	});
	$(".travel-close").on('click', function () {
		$("body").removeClass("travel-on");
	});

	
	//Wildlife portfolio page
	
	$(".wildlife").on('click', function () {
		$("body").addClass("wildlife-on");
	});
	$(".wildlife-close").on('click', function () {
		$("body").removeClass("wildlife-on");
	});

	
	//Nature portfolio page
	
	$(".nature").on('click', function () {
		$("body").addClass("nature-on");
	});
	$(".nature-close").on('click', function () {
		$("body").removeClass("nature-on");
	});

	
})(jQuery);

jQuery(document).ready(function ($) {

	$('#checkbox').change(function(){
	  setInterval(function () {
		  moveRight();
	  }, 3000);
	});
	
	  var slideCount = $('#slider ul li').length;
	  var slideWidth = $('#slider ul li').width();
	  var slideHeight = $('#slider ul li').height();
	  var sliderUlWidth = slideCount * slideWidth;
	  
	  $('#slider').css({ width: slideWidth, height: slideHeight });
	  
	  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	  
	  $('#slider ul li:last-child').prependTo('#slider ul');
  
	  function moveLeft() {
		  $('#slider ul').animate({
			  left: + slideWidth
		  }, 200, function () {
			  $('#slider ul li:last-child').prependTo('#slider ul');
			  $('#slider ul').css('left', '');
		  });
	  };
  
	  function moveRight() {
		  $('#slider ul').animate({
			  left: - slideWidth
		  }, 200, function () {
			  $('#slider ul li:first-child').appendTo('#slider ul');
			  $('#slider ul').css('left', '');
		  });
	  };
  
	  $('a.control_prev').click(function () {
		  moveLeft();
	  });
  
	  $('a.control_next').click(function () {
		  moveRight();
	  });
  
  });    
  