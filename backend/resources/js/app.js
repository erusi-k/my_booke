require('./bootstrap');

import Alpine from 'alpinejs';
import Vue from 'vue';
import {ValidationProvider,ValidationObserver, extend,localize} from 'vee-validate';
import * as originalRules from 'vee-validate/dist/rules';
import ja from 'vee-validate/dist/locale/ja.json';
import StarRating from 'vue-star-rating';
import VueRouter from 'vue-router';
import router from './router';


let rule;
for(rule in originalRules) {
    extend(rule,{
        ...originalRules[rule],
    });
}


localize('ja',ja);


window.Alpine = Alpine;

Alpine.start();

window.Vue = require('vue').default;


Vue.component('bookcreaet-component', require('./components/BookCreateComponent.vue').default);
Vue.component('booklist-component',require('./components/BookListComponent.vue').default);
Vue.component('booklist-component',require('./components/BookListComponent.vue').default);
Vue.component('bookshow-component',require('./components/BookShowComponent.vue').default);
Vue.component('bookedit-component',require('./components/BookEditComponent.vue').default);
Vue.component('header-component',require('./components/HeaderComponent.vue').default);
Vue.component('star-rating',StarRating);
Vue.component('ValidationProvider',ValidationProvider);
Vue.component('ValidationObserver',ValidationObserver);

Vue.use(VueRouter);







const app = new Vue({
    el: '#app',
    router
});