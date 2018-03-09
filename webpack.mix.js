let mix = require('laravel-mix');
let Dashboard = require('webpack-dashboard/plugin')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .webpackConfig({
    plugins: [
      new Dashboard()
    ]
  })
  .js('resources/assets/js/app.js', 'public/js')
  // .sass('resources/assets/sass/sass.scss', 'public/css')
  .stylus('resources/assets/stylus/stylus.styl', 'public/css')
  .disableNotifications()
  // .styles(['public/css/sass.css', 'public/css/stylus.css'], 'public/css/app.css');
