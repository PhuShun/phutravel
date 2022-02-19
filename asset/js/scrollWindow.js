//CountNumber
var viewed = false;
$(window).scroll(function (event) {
	if (isScrolledIntoView(".travel-count") && !viewed) {
		viewed = true;
		$('.travel-count__number').each(function () {
			var start = 0;
			var stop = $(this).text();
			$(this).prop('counter', start).animate({
				counter: stop
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {

					$(this).text(Math.ceil(now));
				}
			});
		});
	}
});
function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
// Slider
var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("slider__container");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 6000); // Change image every 2 seconds
}

//  Nav Menu
var isclose = document.querySelector(".js-close")
var navMobile = document.querySelector(".js-nav")
var menuMobile = document.querySelector(".js-menu")
var slider = document.querySelector(".js-slider")
var container = document.querySelector(".js-container")
var footer = document.querySelector(".js-footer")


function showNavMenu() {
	navMobile.classList.add('open');
}
function hideNavMenu() {
	navMobile.classList.remove('open');
}

menuMobile.addEventListener('click', showNavMenu)
isclose.addEventListener('click', hideNavMenu)
slider.addEventListener('click', hideNavMenu)
container.addEventListener('click', hideNavMenu)
footer.addEventListener('click', hideNavMenu)



