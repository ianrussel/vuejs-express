const mix = require('laravel-mix');

mix.js('resources/assets/js/main.js', 'public/javascripts')
	.sass('resources/assets/sass/app.scss', 'public/css')
	.copy('public/assets/global/plugins/font-awesome/css/font-awesome.css', 'public/css')
	.copy('public/assets/global/plugins/simple-line-icons/simple-line-icons.css', 'public/css')
	.copy('public/assets/global/plugins/bootstrap/css/bootstrap.css', 'public/css')
	.copy('public/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.css', 'public/css')
	.copy('public/assets/global/css/components.css', 'public/css')
	.copy('public/assets/global/css/plugins.css', 'public/css')
	.copy('public/assets/layouts/layout/css/layout.css', 'public/css')
	.copy('public/assets/layouts/layout/css/themes/darkblue.css', 'public/css')
	.copy('public/assets/layouts/layout/css/custom.css', 'public/css')
	.copy('node_modules/bootstrap-sass/assets/fonts/bootstrap/**','public/css/fonts/bootstrap')
	.combine([
			'public/css/app.css',
			'public/css/font-awesome.css',
			'public/css/simple-line-icons.css',
			'public/css/bootstrap.css',
			'public/css/bootstrap-switch.css',
			'public/css/components.css',
			'public/css/plugins.css',
			'public/css/layout.css',
			'public/css/darkblue.css',
			'public/css/custom.css'
		],
	'public/css/combined.min.css')
	.setPublicPath('public')
	.version()
    .options({
        processCssUrls: false,
    });
