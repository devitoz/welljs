benderDefine('Views:Pages:Home', function (app) {
	this.use('Views:Common:Base');
	this.configure({
		layout: 'Main',
		template: 'Pages:Home',
		route: '/'
	});
	return function () {
	  return app.Views.get('Views:Common:Base').extend({
			initialize: function (options) {
				this.template = options.template;
			},
			render: function () {
				this.$el.html(this.template.render());
				return this;
			}
		});
	};
});