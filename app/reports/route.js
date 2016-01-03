import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('report');
  },
  afterModel: function(reports) {
    if (reports.get('length') === 0) {
      this.transitionTo('');
    } else if (reports.get('length') === 1) {
      this.transitionTo('report', reports.get('firstObject'));
    }
  }
});
