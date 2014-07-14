music.fetch().done(function(){
	new MusicView({collection: music});
});

var template = Handlebars.compile($('#student_list_h').html());
var rendered = template({students: this.collection.toJSON()});
console.log({students: this.collection.toJSON()});
this.$el.html(rendered);
return this;