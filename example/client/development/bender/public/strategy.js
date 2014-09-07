benderDefine('Bender:Public:Strategy', function (app) {
	return function () {
		//это должно конфигурироваться до загрузки модулей

		app.Router.configure({
			actions: {
				'/': 'Bender:Public:About',
				'not-found': 'Bender:Public:NotFound'
			},
			routes: [
				/^[A-Za-z0-9\/_-]{0,24}$/
			]
		});

		app.Views.configure({
			layoutHolder: 'body'
		});

		app.Templates.configure({
			html: '/'
		});

		//страница по-умолчанию, если приложение не создано или не найдено
		benderDefine('Bender:Public:About', function () {
			this.use('Bender:Public:Layout');
			this.configure({
				template: 'Bender:Public:About',
				layout: 'Bender:Public:Layout',
				route: '/',
				type: 'view'
			});
			return function () {
				return Backbone.View.extend({
					initialize: function () {

					},
					render: function () {
						this.$el.html(this.template.render());
					}
				});
			}
		});

		//если в пользовательском приложении лэйаут не указан, будет использоваться этот
		benderDefine('Bender:Public:Layout', function () {
			this.configure({
				type: 'view',
				template: 'Bender:Public:Layout'
			});
			return function () {
				return Backbone.View.extend({
					initialize: function () {
					},

					render: function () {
						this.$el.html(this.template.render());
						this.pageContainer = this.$('.main');
					}
				});
			}
		});

		//роутер конфигурируется в конце, либо убрать из него хистори старт

		Handlebars.registerHelper('url', function (route) {
			return '/#' + route;
		});

		app.start();

	}
});