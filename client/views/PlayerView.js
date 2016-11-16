// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',
 
  // initialize: function() {
  //    console.log(this.el);
  //   this.on('hello', function() {
  //     console.log("fhjsdalhflajh");
  //     // this.model.dequeue();
  //     // console.log(this.model);
  //   }, this);
  
  // },
  events: {
    'ended': function() {
      // this.trigger('hello')
      this.model.ended();
    }
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
   // console.log("Entered rende");
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
