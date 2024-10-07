const mix = require('laravel-mix');

mix.js('resources/js/app.jsx', 'public/js')
    .react()  // Kích hoạt React
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

mix.esbuild({
    loader: 'jsx', // Chỉ định loader JSX
    target: 'es2015', // Thiết lập mục tiêu JavaScript
});
