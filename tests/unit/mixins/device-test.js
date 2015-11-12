import Ember from 'ember';
import DeviceMixin from '../../../mixins/device';
import { module, test } from 'qunit';

module('Unit | Mixin | device');

// Replace this with your real tests.
test('it works', function(assert) {
  var DeviceObject = Ember.Object.extend(DeviceMixin);
  var subject = DeviceObject.create();
  assert.ok(subject);
});
