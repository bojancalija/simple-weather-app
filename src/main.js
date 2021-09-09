import { createApp } from 'vue'
import App from './App.vue'

import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import NextHours from './components/NextHours.vue';
import NextDays from './components/NextDays.vue';

const app = createApp(App);

app.component('the-header', TheHeader);
app.component('the-footer', TheFooter);
app.component('next-hours', NextHours);
app.component('next-days', NextDays);

app.mount('#app')
