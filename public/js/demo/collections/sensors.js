var Sensors = Backbone.Collection.extend({
	
	model: Sensor,
		
	url: "/api/data",
	
	initialize: function() {
		this.fetch()
	}
});