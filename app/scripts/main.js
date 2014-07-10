music.fetch().done(function(){
	new MusicView({collection: music});
});