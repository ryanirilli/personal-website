import Ember from 'ember';

export default Ember.Component.extend({
  activeAlbum: null,
  isOpen: null,
  onDidInsertElement: function(){

  }.on('didInsertElement'),

  actions: {
    toggleCover(album) {
      album.toggleProperty('isOpen');
    },

    setActiveAlbum(album) {
      let albums = this.get('content.albums');
      albums.setEach('isActive', false);
      album.set('isActive', true);
    }
  }
});
