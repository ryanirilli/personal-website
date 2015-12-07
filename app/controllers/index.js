import Ember from 'ember';

export default Ember.Controller.extend({
  experimentsCarouselData: [
    {
      headingPath: 'images/visaudio-title.svg',
      heading: 'Visaudio',
      url: 'http://visaudio.me',
      description: 'Visaudio is a new look at your past. It explores the web audio api and uses your photos from Facebook to generate neat slideshows.'
    },
    {
      headingPath: 'images/travlr-title.svg',
      heading: 'Travlr',
      url: 'http://thetravlr.com',
      description: 'Travlr is a simple to use app for creating trip itineraries. It helps people organize their travel plans with an intuitive and easy to use UI.'
    }
  ],

  actions: {
    goToRoute(route, isExternal) {
      if(isExternal) {
        window.location = route;
      } else {
        this.transitionToRoute(route);
      }
    }
  }
});
