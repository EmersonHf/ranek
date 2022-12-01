<template>
  <form>
    <label for="nome">Nome </label>
    <input id="nome" name="nome" v-model="nome" type="text" />

    <label id="email" for="email">Email</label>
    <input id="email" name="email" type="email" v-model="email" />

    <label for="senha" name="senha">Senha</label>
    <input for="senha" name="senha" type="password" v-model="senha" />

    <label for="cep" name="cep" type="cep">CEP</label>
    <input
      for="cep"
      name="cep"
      type="text"
      v-model="cep"
      @keyup="preencherCep"
    />

    <label for="rua" name="rua" type="text">Rua</label>
    <input for="rua" name="rua" type="text" v-model="rua" />

    <label for="numero" name="numero" type="number">Numero</label>
    <input for="numero" name="numero" type="number" v-model="numero" />

    <label for="bairro" name="bairro" type="text">Bairro</label>
    <input for="bairro" name="bairro" type="text" v-model="bairro" />

    <label for="cidade" name="cidade" type="text">Cidade</label>
    <input for="cidade" name="cidade" type="text" v-model="cidade" />

    <label for="estado" name="estado" type="text">Estado</label>
    <input for="estado" name="estado" type="text" v-model="estado" />

    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { getCep } from "@/services.js";
import { mapFields } from "@/helpers.js";
export default {
  computed: {
    ...mapFields({
      fields: [
        "nome",
        "email",
        "senha",
        "cep",
        "rua",
        "numero",
        "bairro",
        "cidade",
        "estado",
      ],
      base: "usuario",
      mutation: "UPDATE_USUARIO",
    }),
  },
  methods: {
    preencherCep() {
      const cep = this.cep.replace(/D/g, "");
      if (cep.length === 8) {
        getCep(cep).then((response) => {
          this.rua = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.estado = response.data.uf;
          this.cidade = response.data.localidade;
        });
      }
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>