import Ember from 'ember';

export default Ember.Component.extend({
  onDidInsertElement: function(){
    this.$().waypoint({
      offset: this.get('offset') || '60%',
      handler: (direction) => {
        this.wayPointHandler(direction);
      }
    });
  }.on('didInsertElement'),

  wayPointHandler(direction) {
    let target = this.get('classTarget');
    let classes = this.get('classes');
    let $target = this.$().closest(target);
    if(direction === 'down') {
      $target.addClass(classes);
    } else {
      $target.removeClass(classes);
    }
  }
});
