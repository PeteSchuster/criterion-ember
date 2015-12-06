import Index from '../models/index';

export default Ember.Object.extend({
  cache:{},
  find: function(id){
    var self = this;
    if (this.cache[id]) {
      return this.cache[id];
    } else {
      return new Ember.RSVP.Promise(function(resolve) {
        resolve($.getJSON('http://jsonplaceholder.typicode.com/posts/' + id));
      }).then(function(result){
        self.cache[id] = Index.create(result);
        return self.cache[id];
      });
    }
  }
});
