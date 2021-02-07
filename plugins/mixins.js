import Vue from 'vue'

Vue.mixin({
	methods: {
		loader (value) {
			this.$store.commit('setLoader', value)
		},
		animate () {
			let elementNames = [
				'.about .section-title',
				'.projects .section-title',
				'.egg',
				'.about .col-container .col.left .mini-title',
				'.about .col-container .col.left .description',
				'.about .col-container .col.right .mini-title',
				'.stt',
                '.boxes-container .box',
                '.projects .section-subtitle'
			]

            elementNames.forEach((elementName, index) => {
                let elements = document.querySelectorAll(elementName)

                if (elements) {
                    if (elements.length > 1) {
                        elements.forEach((el, index) => {
                            let delay = el.hasAttribute('delay') ? parseInt(el.getAttribute('delay')) : 350
                            let bounding = el.getBoundingClientRect()

                            if (bounding.bottom > 0 &&
                                bounding.right > 0 &&
                                bounding.left < (window.innerWidth || document.documentElement.clientWidth) &&
                                bounding.top < (window.innerHeight || document.documentElement.clientHeight)) {
                                setTimeout(() => {
                                    el.classList.add('ov')
                                }, delay * index)
                            }
                        })
                    } else {
                        elements.forEach((el, index) => {
                            let delay = el.hasAttribute('delay') ? parseInt(el.getAttribute('delay')) : 200
                            let bounding = el.getBoundingClientRect()

                            if (bounding.bottom > 0 &&
                                bounding.right > 0 &&
                                bounding.left < (window.innerWidth || document.documentElement.clientWidth) &&
                                bounding.top < (window.innerHeight || document.documentElement.clientHeight)) {

                            	setTimeout(() => {
                                    el.classList.add('ov')
                                }, delay)
                            }
                        })
                    }
                }
            })
        },
	}
})