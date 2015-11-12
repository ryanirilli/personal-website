import Ember from 'ember';

export default Ember.Mixin.create({
  device: null,
  isRetina: false,
  retinaMq: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)",
  breakpoints: {
    palm: "screen and (max-width: 44.9375em)",
    lap: "screen and (min-width: 45em) and (max-width: 63.9375em)",
    desk: "screen and (min-width: 64em)"
  },
  setDevice: function(){
    let breakpoints = this.breakpoints;
    let self = this;

    for(let device in this.breakpoints) {
      let breakpoint = breakpoints[device];
      if(window.matchMedia(breakpoint).matches) {
        self.set('device', device);
      }
    }

    self.set('isRetina', window.matchMedia(this.retinaMq).matches);

    Em.$(window).on('resize', () => {
      Ember.run.debounce(this, this.setDevice, 150);
    });
  }.on('init')
});
