// js/main.js

const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {

	document.body.classList.toggle('dark-mode');

	if(document.body.classList.contains('dark-mode')) {
		toggle.innerHTML = '☀️';
	}
	else {
		toggle.innerHTML = '🌙';
	}
});

particlesJS('particles-js', {

	particles: {

		number: {
			value: 70
		},

		color: {
			value: '#5b7cff'
		},

		shape: {
			type: 'circle'
		},

		opacity: {
			value: 0.25
		},

		size: {
			value: 3
		},

		line_linked: {
			enable: true,
			distance: 140,
			color: '#5b7cff',
			opacity: 0.18,
			width: 1
		},

		move: {
			enable: true,
			speed: 1.5
		}
	},

	interactivity: {

		detect_on: 'canvas',

		events: {

			onhover: {
				enable: true,
				mode: 'grab'
			},

			onclick: {
				enable: true,
				mode: 'push'
			}
		},

		modes: {

			grab: {
				distance: 150,
				line_linked: {
					opacity: 0.4
				}
			},

			push: {
				particles_nb: 4
			}
		}
	},

	retina_detect: true
});