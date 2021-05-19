import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import RegisterA from "./views/RegisterA.vue";
import Profile from "./views/Profile.vue";
import DetailEvent from "./views/DetailEvent.vue";
import Authentification from "./views/Authentification.vue";
import AddEvent from "./views/AddEvent.vue";
import Apropos from "./views/Apropos.vue";
import Contact from "./views/Contact.vue";
Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/registerA",
      name: "registerA",
      components: {
        header: AppHeader,
        default: RegisterA,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
    path: "/Acceuil",
      name: "Acceuil",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/DetailEvent",
      name: "DetailEvent",
      components: {
        header: AppHeader,
        default: DetailEvent,
        footer: AppFooter
      }
    },
    {
      path: "/Authentification",
      name: "Authentification",
      components: {
        header: AppHeader,
        default: Authentification,
        footer: AppFooter
      }
    },
    {
      path: "/AddEvent",
      name: "AddEvent",
      components: {
        header: AppHeader,
        default: AddEvent,
        footer: AppFooter
      }
    },
    {
      path: "/Apropos",
      name: "Apropos",
      components: {
        header: AppHeader,
        default: Apropos,
        footer: AppFooter
      }
    },
    {
      path: "/Contact",
      name: "Contact",
      components: {
        header: AppHeader,
        default: Contact,
        footer: AppFooter
      }
    },

  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
