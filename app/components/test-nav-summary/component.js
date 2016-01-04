import Ember from 'ember';

export default Ember.Component.extend({
  summaryMap: function() {
    var summary = this.get('summary');
    var keys = Object.keys(summary);

    return keys.map(function(key) {
      return {key: key, value: summary[key]};
    });
  }.property('summary')
});
