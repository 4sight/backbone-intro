var Song = Backbone.Model.extend({
	defaults: {
		extension: '.mp3'
	},
	initialize: function() {
		var name = this.get('name');
		console.log('RUN THA TRAAAAACK!!')
	}
});

var Artist = Backbone.Model.extend({});
var Album = Backbone.Model.extend({});

var disorder = new Song({
	name: 'Disorder',
	artist: 'Joy Division'
});

disorder.get('name');

Music = Backbone.Collection.extend ({
	model: Song,
	url: 'http://tiy-atl-fe-server.herokuapp.com/collections/greeley'
});