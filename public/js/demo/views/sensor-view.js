var SensorView = Backbone.View.extend({
	
	tagName: "div",
	
	template: _.template($("#sensor-template").html()),
	
	initialize: function() {
		console.log("intialising sensor view");
		
		this.listenTo(this.model, "change", this.render);
		
		this.model.on("change", this.render, this);
	},
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		
		return this;
	}
});