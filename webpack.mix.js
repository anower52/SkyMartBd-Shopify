const mix = require('laravel-mix');

mix.js('src/js/app.js', 'assets')
   .sass('src/SCSS/app.scss', 'assets')
   .setPublicPath('assets');