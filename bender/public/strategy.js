/*Воткнуть сюда все возможные настройки конфигураций и комментарии к ним*/
benderDefine('Bender:Public:Strategy', function (app) {
	return function () {
		//это должно конфигурироваться до загрузки модулей

		app.Router.configure({
			actions: {
				'/': {
					page: 'Bender:Public:About',
					layout: 'Bender:Public:Layout'
				},
				'not-found': {
					page: 'Bender:Public:NotFound',
					layout: 'Bender:Public:Layout'
				}
			},
			routes: [
				/^[A-Za-z0-9\/_-]{0,24}$/
			]
		});

		app.Views.configure({
			layoutHolder: 'body',
			notFoundModule: 'Bender:Public:NotFound',
			layoutModule: 'Bender:Public:Layout',
			html: true,
			templates: '/'
		});

		app.start();

	}
});