require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


import {createApp} from "vue";
import router from './router'
import CompaniesIndex from './compnents/companies/CompaniesIndex'
createApp({
    components:{
     CompaniesIndex
    }
}).use(router).mount('#app')