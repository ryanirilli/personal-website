import Ember from 'ember';
import Device from './../mixins/device';

export default Ember.Component.extend(Device, {
  data: null,
  slickCarousel: null,
  isSlickInitialized: false,
  setupSlick: function(){

    let data = this.get('data') || [];
    if(!data.length) { return; }

    let slides = this.$('.slick-carousel__slide').toArray();
    let windowHeight = Em.$(window).outerHeight();
    let self = this;
    slides.forEach(function(slide, i) {
      let bgUrl = data[i].bgUrl;
      let $slide = Em.$(slide);
      if(bgUrl) {
        $slide.css({
          'background-image': `url(${bgUrl})`,
          height: self.device !== 'palm' ? windowHeight : 'auto'
        });
      }
    });
    this.initSlick();
  }.on('didInsertElement'),

  initSlick() {
    let slickCarousel = this.$('.slick-carousel');
    slickCarousel.slick({
      slide: '.slick-carousel__slide',
      prevArrow: this.$('.slick-carousel__prev'),
      nextArrow: this.$('.slick-carousel__next')
    });

    this.setProperties({
      slickCarousel: slickCarousel,
      isSlickInitialized: true
    });
  },

  destroySlick() {
    let slickCarousel = this.get('slickCarousel');
    slickCarousel.slick('destroy');
  },

  onDeviceChange: function(){
    if(this.isSlickInitialized) {
      this.destroySlick();
      this.setupSlick();
    }
  }.observes('device')
});
