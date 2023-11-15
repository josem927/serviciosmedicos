import './bootstrap';
import '../css/app.css';

import { createApp, h, DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
// import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { Link, createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faPhone,
    faEnvelope,
    faMagnifyingGlass,
    faEllipsis,
    faHouse,
		faComment,
		faHeart,
		faH,
		faBars,
		faXmark,
		faBook,
		faBookOpen,
		faFile,
		faUserLock,
		faUsers,
		faFileArrowUp,
		faCalendar,
		faAngleLeft,
		faAngleRight,
		faImages,
		faCircleXmark,
		faPlusCircle,
		faTriangleExclamation,
		faMessage,
		faAddressBook,
	
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueLazyload from "vue-lazyload";

library.add(
    faPhone,
    faFacebook,
    faTwitter,
    faEnvelope,
    faTwitter,
    faMagnifyingGlass,
    faEllipsis,
    faHouse,
		faComment,
		faHeart,
		faBars,
		faXmark,
		faBook,
		faBookOpen,
		faFile,
		faMagnifyingGlass,
		faUserLock,
		faUsers,
		faFileArrowUp,
		faFile,
		faCalendar,
		faAngleLeft,
		faAngleRight,
		faImages,
		faCircleXmark,
		faPlusCircle,
		faTriangleExclamation,
		faMessage,
		faAddressBook
);

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
						.use(VueLazyload)
						.use(ZiggyVue, Ziggy)
            .component("font-awesome-icon", FontAwesomeIcon)
						.component("Link", Link)
            .mount(el);
    },
    progress: {
        color: "#450a0a",
    },
});
