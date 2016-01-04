import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['panel', 'panel-default'],

  collapsed: false,

  envMap: function() {
    var env = this.get('env');
    var keys = Object.keys(env);

    return keys.map(function(key) {
      return {key: key, value: env[key]};
    });
  }.property('env'),

  actions: {
    toggleCollapsed: function() {
      var val = this.get('collapsed');
      this.set('collapsed', !val);
    }
  }
});
