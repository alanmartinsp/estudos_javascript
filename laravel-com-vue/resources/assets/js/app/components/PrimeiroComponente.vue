<template>
    
    <div>
        <div>Olá a partir do componente custom!</div>

        <button @click="ola" class="btn btn-default btn-xs">

            {{ buttonLabel }}

        </button>

        <hr>
            
            <input type="text" v-model="buttonLabel" class="form-control">

        </hr>
    </div>
</template>

<script>
    
    export default {

        methods: {

            ola() {
                alert('Olá Mundo')
            }
        },

        data () {

            return {

                buttonLabel: 'O label do meu botão'

            }
        }

    }

</script>