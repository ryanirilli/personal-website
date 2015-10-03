import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pitchfork-carousel', 'Integration | Component | pitchfork carousel', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pitchfork-carousel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pitchfork-carousel}}
      template block text
    {{/pitchfork-carousel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
