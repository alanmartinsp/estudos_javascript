var app = new Vue({
        
        el: '#app',

        data: {

            campos : {
                nome : '',
                peso : '',
                altura : '',
                imc : ''
            },

            pacientes: []
        },

        methods: {

            adicionarParticipante: function(){
                this.pacientes.push({
                  nome: this.campos.nome, 
                  peso: this.campos.peso,
                  altura: this.campos.altura,
                  imc: this.campos.peso / (this.campos.altura * this.campos.altura)
                });

                this.limparCampos(this.campos);
            },

            removerPaciente: function(item){
                this.pacientes = this.pacientes.filter(function(campo){
                    return item != campo ? true : false;
                });
            },

            limparCampos: function(campos){
                campos.nome = '', 
                campos.peso = '',
                campos.altura = ''
            }
        }
      });