import { createApp } from 'vue';
import { createPinia } from 'pinia';
import vClickOutside from 'click-outside-vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import icons from '@/helpers/icons';
import { plugin as Slicksort } from 'vue-slicksort';
import App from './App.vue';
import router from './router';
import '@/styles/main.scss';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(icons);
app.component('awesome-icon', FontAwesomeIcon);
app.use(vClickOutside);
app.use(Slicksort);
app.mount('#app');
