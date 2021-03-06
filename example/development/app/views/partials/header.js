wellDefine('Views:Partials:Header', function (app) {
	this.use('Views:Common:Base');
	return function () {
		return app.Views.get('Views:Common:Base').extend({
			initialize: function (options) {
				this.template = options.template;
				this.selectedItem = this.$('.active');
				this.ul = this.$('.navigation');
				app.Events.on('PAGE_RENDERED', this.onItemClick, this);
			},
			onItemClick: function (options) {
				var route = (options.params.route).replace('/', '') || 'home';
				this.selectedItem.removeClass('active');
				this.selectedItem = this.ul.find('.' + route).addClass('active');
			}
		});
	};
});