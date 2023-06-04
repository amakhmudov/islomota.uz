// open dropdown
const dropdown = document.querySelectorAll('.dropdown-box'),
	openDropdownBtn = document.querySelectorAll('.open-dropdown-btn'),
	bottomArow = document.querySelectorAll('.bottom-arrow'),
	openMenuBtn = document.querySelector('.open-menu__btn'),
	closeMenuBtn = document.querySelector('.close-menu__btn'),
	nav = document.querySelector('.nav'),
	socialMedia = document.querySelector('.social-media')
openDropdownBtn.forEach((btn, index) => {
	btn.addEventListener('click', (e) => {
		dropdown.forEach((item, itemIndex) => {
			if (itemIndex == index) {
				item.classList.toggle('block');
			} else {
				item.classList.remove('block');
			}
			bottomArow.forEach((item, itemIndex) => {
				if (itemIndex == index) {
					item.classList.toggle('active');
				} else {
					item.classList.remove('active');
				}
			})
		})
	})
})
openMenuBtn.addEventListener('click', () => {
	nav.classList.add('active');
	document.body.classList.add('overflow-hidden')
	socialMedia.classList.add('block');
})
closeMenuBtn.addEventListener('click', () => {
	nav.classList.remove('active');
	document.body.classList.remove('overflow-hidden')
	socialMedia.classList.remove('block');
})

var swiper = new Swiper(".mySwiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	speed: 1000,
	grabCursor: true,
	slidesPerView: 2,
	spaceBetween: 24,
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		730: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		833: {
			slidesPerView: 1.2,
			spaceBetween: 24,
		},
		885: {
			slidesPerView: 1.2,
			spaceBetween: 24,
		},
		1300: {
			slidesPerView: 1.5,
			spaceBetween: 24,
		},
		1301: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
		1920: {
			slidesPerView: 2,
			spaceBetween: 24,
		}
	},
});