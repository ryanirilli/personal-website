import Ember from 'ember';

export default Ember.Component.extend({
  waypoint: null,
  onDidInsertElement: function(){
    let waypoint = this.$().waypoint({
      offset: this.get('offset') || '60%',
      handler: (direction) => {
        this.wayPointHandler(direction);
      }
    });
    this.set('waypoint', waypoint);
  }.on('didInsertElement'),

  wayPointHandler(direction) {
    let target = this.get('classTarget');
    let classes = this.get('classes');
    let $target = target ? this.$().closest(target) : this.$();

    if(direction === 'down') {
      $target.addClass(classes);
    } else {
      $target.removeClass(classes);
    }
  },

  willDestroyElement() {
    let waypoint = this.get('waypoint');
    waypoint[0].destroy();
  }
});
