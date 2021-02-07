import Vue from 'vue'

Vue.filter('capitalize', (string) => {
	string = string.toString()
    return string.charAt(0).toUpperCase() + string.slice(1)
})

Vue.filter('slugToTitle', (string) => {
	let words = string.split("-");
	return words.map(function(word) {
		return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
	}).join(' ')
})