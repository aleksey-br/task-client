import { createApp } from 'vue';
import vClickOutside from 'click-outside-vue3';
import { OhVueIcon } from 'oh-vue-icons';
import icons from '@/helpers/icons';
import App from './App.vue';
import router from './router';
import '@/styles/main.scss';

// import clickOutside from './directives/click-outside';

const app = createApp(App);

// app.directive('clickOutside', clickOutside);

app.use(router);
app.use(vClickOutside);
app.use(icons);
app.component('v-icon', OhVueIcon);
app.mount('#app');
