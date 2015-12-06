import Ember from 'ember';
import IndexAdapter from '../adapters/index';

export default Ember.Route.extend({
  model: function () {
    var adapter = IndexAdapter.create();

    return {
      first: adapter.find(1),
      second: adapter.find(2),
    };
  }
});
