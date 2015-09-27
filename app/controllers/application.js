import Ember from 'ember';

export default Ember.Controller.extend({
  isMenuOpen: false,
  actions: {
    toggleMenu() {
      this.toggleProperty('isMenuOpen');
    },

    closeMenu() {
      this.set('isMenuOpen', false);
    }
  }
});
