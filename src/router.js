import Vue from "vue";
import Router from "vue-router";
import Home from "./views/HomeView.vue";
import Produto from "./views/Produto.vue";
import Login from "./views/Login.vue";
import UsuarioPage from "./views/usuario/UsuarioPage.vue";
import UsuarioProdutos from "./views/usuario/UsuarioProdutos";
import UsuarioComprasVue from "./views/usuario/UsuarioCompras.vue";
import UsuarioVendasVue from "./views/usuario/UsuarioVendas.vue";
import UsuarioEditarVue from "./views/usuario/UsuarioEditar.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/produto/:id",
      name: "produto",
      component: Produto,
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      props: true,
    },
    {
      path: "/usuario",
      component: UsuarioPage,
      name: "usuario",
      children: [
        {
          path: "produtos",
          name: "produtos",
          component: UsuarioProdutos,
        },
        {
          path: "compras",
          name: "compras",
          component: UsuarioComprasVue,
        },
        {
          path: "vendas",
          name: "vendas",
          component: UsuarioVendasVue,
        },
        {
          path: "editar",
          name: "usuario-editar",
          component: UsuarioEditarVue,
        },
      ],
      props: true,
    },
  ],
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
});
