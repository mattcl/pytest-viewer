import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':panel', 'panelColor'],
  collapsed: false,

  panelColor: function() {
    var level = this.get('stageLevel');
    return 'panel-' + level;
  }.property('stageLevel'),

  stageLevel: function() {
    var outcome = this.get('stage.outcome');
    if (outcome === 'passed') {
      return 'success';
    } else if (outcome === 'xpassed' || outcome === 'skipped') {
      return 'warning';
    } else {
      return 'danger';
    }
  }.property('stage.outcome'),

  observeStageForCollapse: function() {
    var level = this.get('stageLevel');
    this.set('collapsed', (level !== 'danger'));
  }.observes('stage').on('init'),

  actions: {
    toggleCollapsed: function() {
      var val = this.get('collapsed');
      this.set('collapsed', !val);
    }
  }
});
