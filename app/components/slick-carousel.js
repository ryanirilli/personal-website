import Ember from 'ember';

export default Ember.Component.extend({
  data: null,
  onDidInsertElement: function(){

    let data = this.get('data');
    if(!data || !data.length) { return; }

    this.$('.slick-carousel').slick({
      slide: '.slick-carousel__slide',
      prevArrow: this.$('.slick-carousel__prev'),
      nextArrow: this.$('.slick-carousel__next')
    });

    let slides = this.$('.slick-carousel__slide:not(.slick-cloned)').toArray();
    let windowHeight = Em.$(window).outerHeight();
    slides.forEach(function(slide, i) {
      Em.$(slide).css({
        'background-image': `url(${data[i].bgUrl})`,
         height: windowHeight
      })
    })


  }.on('didInsertElement')
});
