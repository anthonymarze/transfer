import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ceo-profile', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ceo-profile');
    assert.ok(route);
  });
});
