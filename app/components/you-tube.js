import Ember from 'ember';

export default Ember.Component.extend({
  videoId: null,
  isYoutubeAPILoaded: false,
  player: null,
  onInit: function() {
    this.loadYouTubeAPI();
  }.on('init'),

  loadYouTubeAPI() {
    if(Ember.get(window, 'YT.Player')) {
      this.set('isYoutubeAPILoaded', true);
    } else {
      let self = this;
      Ember.$.getScript('https://www.youtube.com/iframe_api', function(){
        window.onYouTubeIframeAPIReady = function() {
          self.set('isYoutubeAPILoaded', true);
        }
      });
    }
  },

  onDidLoadYouTubeAPI: function(){
    let $el = this.$('.you-tube__video');
    let videoId = this.get('videoId');
    let player = new YT.Player($el[0], {
      width: '100%',
      videoId: videoId
    });
    this.set('player', player);
  }.observes('isYoutubeAPILoaded')
});
