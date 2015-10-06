import Ember from 'ember';

export default Ember.Controller.extend({
  isOpen: false,

  pitchforkData: {
    days: [
      Ember.Object.create({
        date: new Date(2015, 8, 28).toJSON(),
        isActive: true,
        albums: [
          Ember.Object.create({
            artist: 'Chvrches',
            albumName: 'Every Open Eye',
            author: 'Ian Cohen',
            imageUrl: 'http://cdn2.pitchfork.com/albums/22396/homepage_large.7ae432ee.jpg',
            thumbUrl: 'http://cdn3.pitchfork.com/albums/22396/list.7ae432ee.jpg',
            description: 'Nearly every moment of&nbsp;Chvrches\' follow up to <i>The Bones of What You Believe </i>radiates with&nbsp;sky-high aspiration, the verses and pre-choruses and choruses in brutal competition to be called "the hook."&nbsp;The fine-tuning and craft&nbsp;is deeply embedded in the music, which exudes that uncanny, priceless quality of the truly popular: confidence.',
            isActive: true
          }),
          Ember.Object.create({
            artist: 'Casey Veggies',
            albumName: 'Live & Grow',
            author: 'Matthew Strauss',
            imageUrl: 'http://cdn.pitchfork.com/albums/22154/homepage_large.ece231a2.jpg',
            thumbUrl: 'http://cdn.pitchfork.com/albums/22154/list.ece231a2.jpg',
            description: 'Casey Veggies desperately wants to create some kind of narrative on his debut studio LP, <i>Live &amp; Grow</i>. There are some catchy pop moments but the project feels weighted down by sampler-platter production and vague, trite lyrics.',
          }),
          Ember.Object.create({
            artist: 'The World Is a Beautiful Place & I Am No Longer Afraid to Die',
            albumName: 'Harmlessness',
            author: 'Evan Rytlewski',
            imageUrl: 'http://cdn4.pitchfork.com/albums/22301/homepage_large.c9f4c274.jpg',
            thumbUrl: 'http://cdn4.pitchfork.com/albums/22301/list.c9f4c274.jpg',
            description: 'The emo band\'s second album is a step forward, increasing the intensity with more careful arrangements. If anything, it has&nbsp;more&nbsp;going on than&nbsp;the debut,&nbsp;but it\’s all done more tastefully, and the album\’s warm, open production makes it easier to take in just how sophisticated these arrangements are.',
          }),
          Ember.Object.create({
            artist: 'Chevel',
            albumName: 'Blurse',
            author: 'Andrew Gaerig',
            imageUrl: 'http://cdn3.pitchfork.com/albums/22422/homepage_large.43c2edbb.jpg',
            thumbUrl: 'http://cdn.pitchfork.com/albums/22422/list.43c2edbb.jpg',
            description: 'The young European produer Chevel takes a bold, confident step away from the dancefloor into deep, abstracted structures and pristine sound design on his latest album. It\'s the result of a young producer not just making techno but taking it apart, rearranging it, breaking it.',
          }),
          Ember.Object.create({
            artist: 'Anderson.Paak',
            albumName: 'The Anderson .Paak EP',
            author: 'Marcus J. Moore',
            imageUrl: 'http://cdn3.pitchfork.com/albums/22316/homepage_large.dfc704ba.jpg',
            thumbUrl: 'http://cdn2.pitchfork.com/albums/22316/list.dfc704ba.jpg',
            description: 'The California producer/singer Anderson .Paak worked extensively with Dr. Dre on <i>Compton, </i>but has achieved only marginal success as a solo artist. His new EP arrives<i>&nbsp;</i>shortly after his work with Dre, to capitalize. His raspy, sensuous voice recalls Bilal, and the songs&nbsp;explore mostly light fare—blowing weed, the highs of personal freedom, the captivating first moments of new love.',
          })
        ]
      }),
      Ember.Object.create({
        date: new Date(2015, 8, 25).toJSON(),
        isActive: false,
        albums: [
          Ember.Object.create({
            isActive: true,
            artist: 'Disclosure',
            albumName: 'Caracal',
            author: 'Meaghan Garvey',
            imageUrl: 'http://cdn3.pitchfork.com/albums/22298/homepage_large.8c654953.jpg',
            thumbUrl: 'http://cdn4.pitchfork.com/albums/22298/list.8c654953.jpg',
            description: 'On the follow-up to their massive 2013 hit <i>Settle</i>, the brothers Guy and Howard Lawrence have dialed down the BPMs significantly and turned toward slow-burning,&nbsp;R&amp;B-inspired grooves. Much of&nbsp;<i>Caracal</i>&nbsp;is vaguely pleasant music you can put on in the background while you’re working—but is that really what we look to Disclosure for?'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'Ryan Adams',
            albumName: '1989',
            author: 'Mark Richardson',
            imageUrl: 'http://cdn3.pitchfork.com/albums/22392/homepage_large.d34940bc.jpg',
            thumbUrl: 'http://cdn3.pitchfork.com/albums/22392/list.d34940bc.jpg',
            description: 'Ryan Adams\'&nbsp;cover of&nbsp;Taylor Swift\'s&nbsp;<i>1989</i>&nbsp;is a lot of fun to think about and talk about, but not much fun to listen to. It is, in other words, a pure product of the Internet. At its best, Swift\'s&nbsp;<i>1989</i>&nbsp;crackles with life, while Adams has transformed it into... a run-of-the-mill Ryan Adams album.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'Mariah',
            albumName: 'Utakata no Hibi',
            author: 'Jakob Dorof',
            imageUrl: 'http://cdn2.pitchfork.com/albums/22294/homepage_large.0a495943.jpg',
            thumbUrl: 'http://cdn4.pitchfork.com/albums/22294/list.0a495943.jpg',
            description: 'This mostly unknown early \'80s record from Japan has been absent from conversation for the past 30 years. Now, it &nbsp;is reissued and ready to blow your mind. With mesh of Japanese and Armenian sounds, Mariah\'s unforgettable melodies walk the fine line they all but invented between its authors’ musical heritages.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'The Underachievers',
            albumName: 'Evermore: The Art of Duality',
            author: 'Mosi Reeves',
            imageUrl: 'http://cdn.pitchfork.com/albums/22253/homepage_large.64093fc2.jpg',
            thumbUrl: 'http://cdn4.pitchfork.com/albums/22253/list.64093fc2.jpg',
            description: 'Brooklyn\'s Underachievers practice the kind of esoteric mysticism that once flourished in some far-flung corners of \'90s rap, from Leaders of the New School to X-Clan.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'Juicy J',
            albumName: '100% Juice',
            author: 'Matthew Ramirez',
            imageUrl: 'http://cdn2.pitchfork.com/albums/22363/homepage_large.39b618e6.jpg',
            thumbUrl: 'http://cdn.pitchfork.com/albums/22363/list.39b618e6.jpg',
            description: 'Brooklyn\'s Underachievers practice the kind of esoteric mysticism that once flourished in some far-flung corners of \'90s rap, from Leaders of the New School to X-Clan.'
          })
        ]
      }),
      Ember.Object.create({
        date: new Date(2015, 8, 24).toJSON(),
        isActive: false,
        albums: [
          Ember.Object.create({
            isActive: true,
            artist: 'Young Thug',
            albumName: 'Slime Season',
            author: 'David Drake',
            imageUrl: 'http://cdn2.pitchfork.com/albums/22390/homepage_large.4637f149.jpg',
            thumbUrl: 'http://cdn4.pitchfork.com/albums/22390/list.4637f149.jpg',
            description: 'An odds-and-ends compilation with no coherent vision, <i>Slime Season</i> finds Young Thug rapping at a high level, but performing less consistently as a songwriter. Yet Thug remains one of hip-hop\'s most exciting stylists, and there are still a few career highlights here.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'T.I.',
            albumName: 'Da\' Nic EP',
            author: 'Ernest Wilkins',
            imageUrl: 'http://cdn3.pitchfork.com/albums/22362/homepage_large.a9b5ddc8.jpg',
            thumbUrl: 'http://cdn.pitchfork.com/albums/22362/list.a9b5ddc8.jpg',
            description: '<i>Da\' Nic</i> is&nbsp;a new five-song EP meant as a warm-up for the forthcoming&nbsp;<i>Dime Trap,</i> which will be the<i>&nbsp;</i>first album T.I. will record under his original&nbsp;TIP&nbsp;nickname. Though it\'s a short release, <i>Da\' Nic</i> is&nbsp;a strong record from one of the better rappers we have these days and a breath of fresh air from a guy who was treading the path of&nbsp;"reality show dad"&nbsp;just a few years back.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'Everything Dies',
            albumName: 'Des Ark',
            author: 'Evan Rytlewski',
            imageUrl: 'http://cdn4.pitchfork.com/albums/22272/homepage_large.127674a8.jpg',
            thumbUrl: 'http://cdn2.pitchfork.com/albums/22272/list.127674a8.jpg',
            description: 'Aimée Argote\'s band Des Ark oscillates between thrashing noise rock and hushed folk.&nbsp;<i>Everything Dies</i> is her most unified project, and for&nbsp;all the turmoil it confronts, it creates a sense of safety.&nbsp;Nearly every song extends a hand to the abused, the subjugated, or the otherwise marginalized and reassures them they’ll be all right.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'Toro Y Moi',
            albumName: 'Samantha',
            author: 'Eric Torres',
            imageUrl: 'http://cdn4.pitchfork.com/albums/22326/homepage_large.47456868.jpg',
            thumbUrl: 'http://cdn2.pitchfork.com/albums/22326/list.47456868.jpg',
            description: '<i>Samantha</i>, a free mixtape that piles together recordings from as far back as 2012 and as recent as last month, including collaborations with Washed Out, Rome Fortune, Kool A.D., and more, ably tracks&nbsp;Chaz Bundick’s&nbsp;evolution as a producer and songwriter.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'Micachu and the Shapes',
            albumName: 'Good Sad Happy Bad',
            author: 'Hazel Cills',
            imageUrl: 'http://cdn.pitchfork.com/albums/22358/homepage_large.01119442.jpg',
            thumbUrl: 'http://cdn2.pitchfork.com/albums/22358/list.01119442.jpg',
            description: '<i>Good Sad Happy Bad</i>&nbsp;toys with a warped minimalism that feels new for Micachu and the Shapes. The record feels intimate and casual, with soft, acoustic guitar and childlike keyboard arrangements. It is their least polished release, but even with the band’s music messily chopped, looped, and jangled, the emotional messages always ring clear.'
          })
        ]
      }),
      Ember.Object.create({
        date: new Date(2015, 8, 24).toJSON(),
        isActive: false,
        albums: [
          Ember.Object.create({
            isActive: true,
            artist: 'Drake / Future',
            albumName: 'What a Time to Be Alive',
            author: 'Sheldon Pearce',
            imageUrl: 'http://cdn.pitchfork.com/albums/22393/homepage_large.725f9dcb.jpg',
            thumbUrl: 'http://cdn3.pitchfork.com/albums/22393/list.725f9dcb.jpg',
            description: '<i>What a Time to Be Alive</i> was allegedly born out of an impromptu, six-day recording session between Drake and Future, and the mixed results won\'t surprise anyone who has already noted the decided lack of chemistry between the two. There\'s been a Drake feature on every Future album, but none of them are particularly riveting, and on <i>What a Time</i> it\'s clearer than ever that they have difficulty sharing the same space.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'U.S. Girls',
            albumName: 'Half Free',
            author: 'Stuart Berman',
            imageUrl: 'http://cdn.pitchfork.com/albums/22244/homepage_large.aaa3dd4e.jpg',
            thumbUrl: 'http://cdn.pitchfork.com/albums/22244/list.aaa3dd4e.jpg',
            description: 'The women on<i> Half Free</i>&nbsp;are indeed half free: They\'re prisoners to bad choices and duplicitous men, but they\'re starting to take control of their situation. The sound further fortifies the common ground between Meghan Remy\'s diamond-cut melodies and avant-garde urges, and the album sounds like your favorite golden-oldies station beamed through a pirate-radio frequency.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'Fennesz / King Midas Sound',
            albumName: 'Edition 1',
            author: 'Andy Beta',
            imageUrl: 'http://cdn.pitchfork.com/albums/22277/homepage_large.4fcf0534.jpg',
            thumbUrl: 'http://cdn2.pitchfork.com/albums/22277/list.4fcf0534.jpg',
            description: 'The latest from Kevin Martin\'s experimental dub project is a series of four EPs collaborating with an outside artist, beginning with this release with Austrian guitarist-composer Christian Fennesz.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'Jawbox',
            albumName: 'Jawbox',
            author: 'Brian Howe',
            imageUrl: 'http://cdn.pitchfork.com/albums/22153/homepage_large.43da0ecc.jpg',
            thumbUrl: 'http://cdn4.pitchfork.com/albums/22153/list.43da0ecc.jpg',
            description: 'Jawbox\'s final album receives a welcome reissue. If it doesn\'t match the heights of its predecessor <i>For Your Own Special Sweetheart</i>, it still&nbsp;captures a powerful band in top form.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'Destruction Unit',
            albumName: 'Negative Feedback Resistor',
            author: 'Sam Lefebvre',
            imageUrl: 'http://cdn3.pitchfork.com/albums/22360/homepage_large.5062c344.jpg',
            thumbUrl: 'http://cdn2.pitchfork.com/albums/22360/list.5062c344.jpg',
            description: 'The Phoenix psych-punk group Destruction Unit make a refreshing show of cross-genre camaraderie in a live setting and celebrated the release of their latest album<i> </i>with the pioneering prison abolitionist group Critical Resistance. But despite the commitment to activism and their exploding of aesthetic cliques, <i>Negative Feedback Resistor</i> sounds rather familiar.'
          })
        ]
      }),
      Ember.Object.create({
        date: new Date(2015, 8, 24).toJSON(),
        isActive: false,
        albums: [
          Ember.Object.create({
            isActive: true,
            artist: 'Kurt Vile',
            albumName: 'b’lieve i’m goin down',
            author: 'Mark Richardson',
            imageUrl: 'http://cdn.pitchfork.com/albums/22104/homepage_large.5f30eab1.jpg',
            thumbUrl: 'http://cdn4.pitchfork.com/albums/22104/list.5f30eab1.jpg',
            description: 'Kurt Vile\'s albums draw you in with the vibe, but you return to them for their human qualities, the way they offer a manner of seeing the world. His tossed-off musings on <i>b’lieve i’m goin down</i> remind you that every sage worth a damn knew that life was absurdly funny and tragic simultaneously.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'New Order',
            albumName: 'Music Complete',
            author: 'T. Cole Rachel',
            imageUrl: 'http://cdn.pitchfork.com/albums/22300/homepage_large.b93895b1.jpg',
            thumbUrl: 'http://cdn3.pitchfork.com/albums/22300/list.b93895b1.jpg',
            description: 'Having largely eschewed the heavy guitars that weighed down much of their output for the past decade, New Order embrace electronics again on&nbsp;<i>Music Complete</i>. They conjure the kind of synth washes and house-y piano runs that could have easily pulsed across their records during their mid-\'80s heyday, making for what is arguably the most refined record they’ve released since 1989’s&nbsp;<i>Technique</i>.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'Dungen',
            albumName: 'Allas Sak',
            author: 'Aaron Leitko',
            imageUrl: 'http://cdn2.pitchfork.com/albums/22216/homepage_large.94d27bd8.jpg',
            thumbUrl: 'http://cdn3.pitchfork.com/albums/22216/list.94d27bd8.jpg',
            description: 'Ten years on from the minor psych-rock renaissance that birthed them, the Swedish quartet have proved surprisingly durable, even influential<i>. Allas Sak&nbsp;</i>finds the band fully re-engaged in the sound that they have staked out over the past decade—performing music that’s still as beautiful, optimistic, strange, and singular as ever.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'Natasha Kmeto',
            albumName: 'Inevitable',
            author: 'Britt Julious',
            imageUrl: 'http://cdn4.pitchfork.com/albums/22359/homepage_large.c500c1c2.jpg',
            thumbUrl: 'http://cdn3.pitchfork.com/albums/22359/list.c500c1c2.jpg',
            description: 'Electronic producer&nbsp;<span class="il">Natasha</span>&nbsp;<span class="il">Kmeto has&nbsp;</span>spoken frankly about her&nbsp;coming out experience, a development in her sexual identity that has found its way into her music. Her awareness developed in large part on the dance floor—<i>Inevitable</i>&nbsp;brings this catharsis to her listeners.'
          }),
          Ember.Object.create({
            isActive: false,
            artist: 'Botany',
            albumName: 'Dimming Awe, the Light Is Raw',
            author: 'Eric Torres',
            imageUrl: 'http://cdn2.pitchfork.com/albums/22295/homepage_large.8c978e78.jpg',
            thumbUrl: 'http://cdn2.pitchfork.com/albums/22295/list.8c978e78.jpg',
            description: 'Spencer Stephenson\'s second full-length under the Botany moniker, <i>Dimming Awe, the Light Is Raw</i>&nbsp;scours away the haze of his underrated 2013 debut. Stephenson\'s biggest strength is his ability to weave all of his influences—Eastern-based samples, throbbing hip-hop beats, stretches of noodly ambient—into alternatingly danceable and meditative psychedelia.'
          })
        ]
      })
    ]
  }
});
