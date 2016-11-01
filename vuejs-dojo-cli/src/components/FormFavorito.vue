<template>
  <div class="container">
      <h1>Olá Mundo</h1>
      <form class="form-horizontal">
        <div class="form-group">
              <label>Pagina</label>
              <input type="text" class="form-control" v-model="campos.pagina" placeholder="Nome Da Pagina" autofocus="">
          </div>
          <div class="form-group">
              <label>URL</label>
              <input type="url" v-model="campos.url" class="form-control" placeholder="Url da Pagina" >
          </div>
          <button type="submit" class="btn btn-default" v-if="validarFormulario" @click.prevent = "obterFavoritoInformado">Cadastrar Favorito</button>
        </form>
  </div>
</template>

<script>
export default {
  name: 'formulariofavorito',

  data: function () {
    return {
      campos: {
        pagina: '',
        url: ''
      }
    }
  },

  methods: {
    obterFavoritoInformado: function () {
      this.$emit('favoritoinformado', this.campos)
    }
  },

  computed: {
    validarFormulario: function () {
      return this.campos.pagina !== '' && this.campos.url !== ''
    }
  }

}
</script>

