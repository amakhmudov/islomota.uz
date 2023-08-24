let worldSwiper = new Swiper(".world-news-swiper .swiper", {
	autoHeight: true,
	spaceBetween: 24,
	pagination: {
		el: ".world-news-swiper .swiper-pagination",
		clickable: true,
	},
	uniqueNavElements: false,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 2,
		},
	},
});

let localSwiper = new Swiper(".local-news-swiper .swiper", {
	autoHeight: true,
	spaceBetween: 24,
	pagination: {
		el: ".local-news-swiper .swiper-pagination",
		clickable: true,
	},
	uniqueNavElements: false,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 2,
		},
	},
});