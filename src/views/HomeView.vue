<template>
  <section>
    <h1>👍Compre ou Venda💰</h1>
    <produtos-buscar></produtos-buscar>
    <produtos-lista></produtos-lista>
  </section>
</template>

<script>
// @ is an alias to /src

import ProdutosBuscar from "@/components/ProdutosBuscar.vue";
import ProdutosLista from "@/components/ProdutosLista.vue";

export default {
  name: "HomeView",
  components: {
    ProdutosBuscar,
    ProdutosLista,
  },
};
</script>