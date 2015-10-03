import Ember from 'ember';

export default Ember.Controller.extend({
  isOpen: false,

  pitchforkData: {
    albums: [
      Ember.Object.create({
        artist: 'Chvrches',
        albumName: 'Every Open Eye',
        imageUrl: 'http://cdn2.pitchfork.com/albums/22396/homepage_large.7ae432ee.jpg',
        thumbUrl: 'http://cdn3.pitchfork.com/albums/22396/list.7ae432ee.jpg',
        description: 'Nearly every moment of&nbsp;Chvrches\' follow up to <i>The Bones of What You Believe </i>radiates with&nbsp;sky-high aspiration, the verses and pre-choruses and choruses in brutal competition to be called "the hook."&nbsp;The fine-tuning and craft&nbsp;is deeply embedded in the music, which exudes that uncanny, priceless quality of the truly popular: confidence.',
        date: new Date(2015, 8, 28).toJSON(),
        isActive: true
      }),
      Ember.Object.create({
        artist: 'Casey Veggies',
        albumName: 'Live & Grow',
        imageUrl: 'http://cdn.pitchfork.com/albums/22154/homepage_large.ece231a2.jpg',
        thumbUrl: 'http://cdn.pitchfork.com/albums/22154/list.ece231a2.jpg',
        description: 'Casey Veggies desperately wants to create some kind of narrative on his debut studio LP, <i>Live &amp; Grow</i>. There are some catchy pop moments but the project feels weighted down by sampler-platter production and vague, trite lyrics.',
        date: new Date(2015, 8, 28).toJSON()
      }),
      Ember.Object.create({
        artist: 'The World Is a Beautiful Place & I Am No Longer Afraid to Die',
        albumName: 'Harmlessness',
        imageUrl: 'http://cdn4.pitchfork.com/albums/22301/homepage_large.c9f4c274.jpg',
        thumbUrl: 'http://cdn4.pitchfork.com/albums/22301/list.c9f4c274.jpg',
        description: 'The emo band\'s second album is a step forward, increasing the intensity with more careful arrangements. If anything, it has&nbsp;more&nbsp;going on than&nbsp;the debut,&nbsp;but it\’s all done more tastefully, and the album\’s warm, open production makes it easier to take in just how sophisticated these arrangements are.',
        date: new Date(2015, 8, 28).toJSON()
      }),
      Ember.Object.create({
        artist: 'Chevel',
        albumName: 'Blurse',
        imageUrl: 'http://cdn3.pitchfork.com/albums/22422/homepage_large.43c2edbb.jpg',
        thumbUrl: 'http://cdn.pitchfork.com/albums/22422/list.43c2edbb.jpg',
        description: 'The young European produer Chevel takes a bold, confident step away from the dancefloor into deep, abstracted structures and pristine sound design on his latest album. It\'s the result of a young producer not just making techno but taking it apart, rearranging it, breaking it.',
        date: new Date(2015, 8, 28).toJSON()
      }),
      Ember.Object.create({
        artist: 'Anderson.Paak',
        albumName: 'The Anderson .Paak EP',
        imageUrl: 'http://cdn3.pitchfork.com/albums/22316/homepage_large.dfc704ba.jpg',
        thumbUrl: 'http://cdn2.pitchfork.com/albums/22316/list.dfc704ba.jpg',
        description: 'The California producer/singer Anderson .Paak worked extensively with Dr. Dre on <i>Compton, </i>but has achieved only marginal success as a solo artist. His new EP arrives<i>&nbsp;</i>shortly after his work with Dre, to capitalize. His raspy, sensuous voice recalls Bilal, and the songs&nbsp;explore mostly light fare—blowing weed, the highs of personal freedom, the captivating first moments of new love.',
        date: new Date(2015, 8, 28).toJSON()
      })
    ]
  }
});
