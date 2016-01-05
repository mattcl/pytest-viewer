import Ember from 'ember';

export default Ember.Component.extend({
  collapsed: false,

  actions: {
    toggleCollapsed: function() {
      var val = this.get('collapsed');
      this.set('collapsed', !val);
    }
  }
});
