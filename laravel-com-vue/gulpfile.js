const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {

	mix.webpack('app.js');

	// mix.browserify('app.js');

	// mix.rollup('app.js');

    mix.sass('app.scss');

    //Buscamos na raiz do projeto o css desejado
    mix.styles([
    	'./node_modules/font-awesome/css/font-awesome.css'
    ], 'public/css/vendor.css');

    //Copiamos os arquivos e informamos qual será o diretorio do mesmo
    mix.copy('node_modules/font-awesome/fonts', 'public/build/fonts');

    //Versionamos os css para que o brownser tenha sempre que atualizar os arquivos
    mix.version([
    	'public/css/vendor.css',
    	'public/css/app.css',
    	'public/js/app.js'
    ]);

    //Atualiza página automaticamente
    mix.browserSync({
    	proxy: 'localhost:8000'
    });

});
