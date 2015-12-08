import Ember from 'ember';

export default Ember.Component.extend({
  blogName: 'ryanirillidev',
  tagged: 'design',
  tumblrData: null,
  onDidInsertElement: function(){
    Ember.$.ajax({
      dataType:'jsonp',
      url: `http://api.tumblr.com/v2/blog/${this.get('blogName')}.tumblr.com/posts`,
      data: {
        tag: this.get('tagged'),
        api_key: 'dgYL53KgePEaFbv2WR7B8Xx6QM7qBZG4j0HEJDL3KMzQJoApAj'
      },
      success: (res, status, xhr) => {
        this.set('tumblrData', res.response);
        Ember.run.scheduleOnce('afterRender', this, function() {
          this.$().imagesLoaded(() => {
            this.$().masonry({
              itemSelector: '.layout__item'
            });
          });
        });
      }
    });
  }.on('didInsertElement')
});
