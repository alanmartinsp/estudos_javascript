<template>
  <div id="app">
    <form-favorito @favoritoinformado="cadastrarFavorito"></form-favorito>
    <lista-favorito :favoritos="favoritos"></lista-favorito>
  </div>
</template>

<script>
import FormFavorito from './components/FormFavorito'
import ListaFavorito from './components/ListaFavorito'

export default {
  name: 'app',
  data: function () {
    return {
      favoritos: []
    }
  },
  components: {
    FormFavorito,
    ListaFavorito
  },
  methods: {
    cadastrarFavorito: function (campos) {
      console.log(campos)
      this.favoritos.push(campos)
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
