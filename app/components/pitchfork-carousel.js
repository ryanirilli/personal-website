import Ember from 'ember';

export default Ember.Component.extend({
  activeAlbum: null,
  isOpen: null,
  selectedDayIndex: 0,
  selectedDay: function() {
    let selectedDayIndex = this.get('selectedDayIndex');
    return this.get('content')[selectedDayIndex];
  }.property('selectedDayIndex'),

  onDidInsertElement: function(){

  }.on('didInsertElement'),

  actions: {
    toggleCover(album) {
      album.toggleProperty('isOpen');
    },

    setActiveDay(index) {
      let selectedDayIndex = this.get('selectedDayIndex');
      let currentDay = this.get('content.days').objectAt(selectedDayIndex);
      let newDay = this.get('content.days').objectAt(index);
      currentDay.set('isActive', false);
      newDay.set('isActive', true);
      this.set('selectedDayIndex', index);
    },

    setActiveAlbum(album) {
      let selectedDayIndex = this.get('selectedDayIndex');
      let day = this.get('content.days').objectAt(selectedDayIndex);
      let albums = day.albums;
      albums.setEach('isActive', false);
      album.set('isActive', true);
    }
  }
});
