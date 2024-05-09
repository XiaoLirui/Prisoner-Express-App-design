import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next'
import fixtures from '/workspaces/l-f-t-r-project/admin/fixtures.json'
import { createPinia } from 'pinia';

import App from './App.vue'
import router from './router'
import store from './store';
const pinia = createPinia();

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(createBootstrap({ components: true, directives: true }))

app.use(router)
app.use(pinia);
app.use(store);
app.config.globalProperties.fixtures = fixtures;
app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

app.mount('#app')
