import "./bootstrap";
import "../css/app.css";
import "vue-select/dist/vue-select.css";
import "vue-toastification/dist/index.css";

import { createApp, h, DefineComponent } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as HiIcons from "oh-vue-icons/icons/hi";
import * as CoIcons from "oh-vue-icons/icons/co";
import * as FaIcons from "oh-vue-icons/icons/fa";
import vSelect from "vue-select";
import Toast from "vue-toastification";

const appName = import.meta.env.VITE_APP_NAME || "TindakAudit";

const Hi = Object.values({ ...HiIcons });
addIcons(...Hi);
const Co = Object.values({ ...CoIcons });
addIcons(...Co);
const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob<DefineComponent>("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });
        app.use(plugin);
        app.use(ZiggyVue);
        app.component("v-icon", OhVueIcon);
        app.component("v-select", vSelect);
        app.use(Toast);
        //
        app.mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
