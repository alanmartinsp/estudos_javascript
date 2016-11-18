class NegociacaoController {

    constructor() {
        
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {

        event.preventDefault();

        //Convertendo data
        // let data = new Date(this._inputData.value.split("-"));
        // let data = new Date(this._inputData.value.replace(/-/g, ','));
        
        // ----------------------------------------------------
        // let data = new Date(...
        //     this._inputData.value
        //         .split("-")
        //         .map(function(item, indece){
        //             if( indece === 1) {
        //                 return item - 1;
        //             }

        //             return item;
        //         })
        // );

        // ----------------------------------------------------
        // Spread operator (...)
        // Três pontinhos indica o uso do spread operator e com ele o JavaScript extrairá cada elemento do array.
        let data = new Date(...
            this._inputData.value
                .split("-")
                //PODEMOS DEIXAR O CÓDIGO MENOS VERBOSO COM ARROW FUNCTIONS 
                //COM ARROW FUNCTION NÃO PRECISAMOS ESCREVER A PALAVRA FUNCTION.
                //QUANDO ELA POSSUI APENAS UMA LINHA, NÃO PRECISAMOS USAR O BLOCO E NEM A PALAVRA CHAVE return
                .map((item, indece) => indece === 1 ? item - 1 : item));

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade,
            this._inputValor
        );

    }

}