import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from "./components/Home/Home.Component.vue";
import Blog from "./components/Blog/Blog.Component.vue";
import Contact from "./components/Contact/Contact.Component.vue";

// vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faXTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebook, faXTwitter, faLinkedin, faYoutube);

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/blog/",
        component: Blog
    },
    {
        path: "/contact/",
        component: Contact
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
