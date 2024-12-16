let mix = require('laravel-mix')
let NovaExtension = require('laravel-nova-devtool')

mix.extend('nova', new NovaExtension())

mix
    .setPublicPath('dist')
    .js('resources/js/field.js', 'js')
    .vue({ version: 3 })
    .postCss("resources/css/field.css", "css", [
        require("tailwindcss"),
    ])
    .nova("blendbyte/nova-attach-many")
