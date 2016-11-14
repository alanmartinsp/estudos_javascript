
//Importando Jquery
window.JQuery = window.$ = require('jquery');

import Vue from 'vue'

import PrimeiroComponente from './app/components/PrimeiroComponente.vue'

new Vue({
	
	el: '#app',

	components: {
		PrimeiroComponente
	}
})