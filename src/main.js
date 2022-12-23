import { createApp } from 'vue';
import vClickOutside from 'click-outside-vue3';
import { OhVueIcon } from 'oh-vue-icons';
import icons from '@/helpers/icons';
import { plugin as Slicksort } from 'vue-slicksort';
import App from './App.vue';
import router from './router';
import '@/styles/main.scss';

const app = createApp(App);

app.use(router);
app.use(vClickOutside);
app.use(Slicksort);
app.use(icons);
app.component('v-icon', OhVueIcon);
app.mount('#app');
