// SongQueue.js - Defines a backbone model class for the song queue. 
//collection of Songs
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
  },

  playFirst: function() {},

  add: function(song) {
    // this.on('add', function() {})
  } 

});