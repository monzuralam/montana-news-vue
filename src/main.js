import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from "./components/Home/Home.Component.vue";
import Blog from "./components/Blog/Blog.Component.vue";
import Contact from "./components/Contact/Contact.Component.vue";

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

createApp(App).use(router).mount('#app')
