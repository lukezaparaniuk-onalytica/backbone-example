var AppView = Backbone.View.extend({
	
	el: "#app",

	initialize: function() {
		console.log("initialising app view");
		
		this.views = [];
		
		this.collection = new Sensors();
		
		this.listenTo(this.collection, "add", this.add);
		
		var poller = Backbone.Poller.get(this.collection);
		poller.start();
	},

	render: function () {
		console.log("rendering app view");
		
		var self = this;
		
		_.each(this.views, function(view) {
			self.$el.append(view.render().el);
		});
		
		return this;
	},
	
	add: function (model) {
		var sensorView = new SensorView({ model: model, foo: "bar" });
		this.views.push(sensorView);
		this.render();
	}
});