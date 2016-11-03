<template>
  <div class="container">
    <table class="table table-bordered table-collapsed table-hover">
      <thead>
        <tr>
          <td>Pagina</td>
          <td colspan="2">Url</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="favorito in favoritos">
            <td>{{ favorito.pagina }}</td>
              <td><a :href="favorito.url" target="_blank" >{{ favorito.url }}</a></td>
              <td><button type="button" class="btn btn-danger" @click="removerFavorito(favorito)">
                <i class="glyphicon glyphicon-trash"></i> Remover</button></td>
            </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
  export default {
    name: 'listafavorito',
    props: {
      favoritos: {}
    },
    methods: {
      removerFavorito: function (item) {
        console.log('Remover')
        this.favoritos = this.favoritos.filter(function (campo) {
          return item !== campo
        })
      }
    }
  }
</script>