import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/Inicio"),
  },
  {
    path: "/registro",
    name: "registro",
    component: () => import("../components/RegistrarProducto"),
  },
  {
    path: "/listag",
    name: "listag",
    component: () => import("../components/ListaGeneral"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/EditarProducto"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;