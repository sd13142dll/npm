import Vue from 'vue'
import $ from 'jquery'
import App from './App.vue'
import numberRoll from '@test/number-roll'


setInterval(function(){
	numberRoll( '.list', Math.floor(Math.random() * 10000000), 1000, true );
}, 2000);

console.log( $('.testJQ').html() );

/*new Vue({
  el: '#app',
  render: h => h(App)
})*/
