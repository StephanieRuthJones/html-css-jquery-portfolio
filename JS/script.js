$(document).ready(function () {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Artist.", "Photographer.", "Backpack designer.", "Custom furniture upholsterer."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		},
		items: 1,
		margin: 10,
		autoHeight: true,
		loop: true,

	})

	$("#navigation li a").click(function (e) {
		e.preventDefault()

		let targetElement = $(this).attr("href")
		let targetPosition = $(targetElement).offset().top
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
	})

	const nav = $("#navigation");
	const navTop = nav.offset().top;
	$(window).on("scroll", stickyNavigation)

	function stickyNavigation() {
		let body = $("body")

		if ($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px")
			body.addClass("fixedNav")
		}
		else {
			body.css("padding-top", 0)
			body.removeClass("fixedNav")
		}



	}



});