var Songs = Backbone.Model.extend({
	defaults: {
		extension: '.mp3'
	},

	initialize: function() {
		var name = this.get('name');
		console.log('RUN THA TRAAAAACK!!')
	}
});

var disorder = new Songs({
	name: 'Disorder',
	artist: 'Joy Division'
});

disorder.get('name');