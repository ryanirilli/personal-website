import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('experiments', function() {
    this.route('rebuilding-pitchforks-album-carousel', function() {
      this.route('demo');
    });
  });
});

export default Router;
