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
        properFormat (value) {
            let newValue = value.split('The ')[1].split(' field')[0].split('.')
            if (newValue.length > 1) {
                newValue = newValue[1].split('[]')
                if (newValue.length > 1) {
                    let nextValue = newValue[0].split('_')
                    if (nextValue.length > 1) {
                        newValue = nextValue[0].charAt(0).toUpperCase() + nextValue[0].slice(1) + ' ' + nextValue[1].charAt(0).toUpperCase() + nextValue[1].slice(1)
                    } else {
                        newValue = newValue[0].charAt(0).toUpperCase() + newValue[0].slice(1)
                    }
                }
            } else {
                newValue = value.split('The ')[1].split(' field')[0].split('[]')
                if (newValue.length > 1) {
                    let nextValue = newValue[0].split('_')
                    if (nextValue.length > 1) {
                        newValue = nextValue[0].charAt(0).toUpperCase() + nextValue[0].slice(1) + ' ' + nextValue[1].charAt(0).toUpperCase() + nextValue[1].slice(1)
                    } else {
                        newValue = newValue[0].charAt(0).toUpperCase() + newValue[0].slice(1)
                    }
                } else {
                    newValue = value.split('The ')[1].split(' field')[0].split('_')
                    if (newValue.length > 1) {
                        let firstValue = ''
                        let lastValue = ''
                        if (newValue[0] != 'co' && newValue[0] != 'pa' && newValue[0] != 'ec' && newValue[0] != 'ba') {
                            firstValue = newValue[0].charAt(0).toUpperCase() + newValue[0].slice(1)
                        }
                        for (let i = 1; i < newValue.length; i++) {
                            if (newValue[i] != 'id') {
                                lastValue += ' ' + newValue[i].charAt(0).toUpperCase() + newValue[i].slice(1)
                            }
                        }
                        newValue = firstValue + ' ' + lastValue
                    } else {
                        newValue = value.split('The ')[1].split(' field')[0].charAt(0).toUpperCase() + value.split('The ')[1].split(' field')[0].slice(1)
                    }
                }
            }
            let message = value.split('The ')[1].split(' field')
            if (message.length > 1) {
                message = message[1]
                return `The ${newValue} field${message}`
            } else {
                if (message[0].split('file').length > 1) {
                    message = message[0].split('file')[1]
                    return `The ${newValue} field${message}`
                } else {
                    if (message[0].split('image').length > 1) {
                        message = message[0].split('image[]')[1]
                        return `The ${newValue} ${message}`
                    } else {
                        return `The ${newValue}`
                    }
                }
            }
        },
	}
})