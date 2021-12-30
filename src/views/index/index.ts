/*
    createdBy:muyufei
    createdDate:2021/10/25
    des:
*/

import { createApp } from 'vue';


import indexPage from './index.vue';

import "../../assets/common.less";

let app = createApp(indexPage);

app.mount('#app');
