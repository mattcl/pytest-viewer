import Ember from 'ember';
import levelForOutcome from 'pytest-viewer/utils/level-for-outcome';

export default Ember.Component.extend({
  classNameBindings: [':panel', 'panelColor'],
  collapsed: false,

  panelColor: function() {
    var outcome = this.get('stage.outcome');
    var level = levelForOutcome(outcome);
    return 'panel-' + level;
  }.property('stage.outcome'),

  xfailReason: function() {
    var outcome = this.get('stage.outcome');
    if (outcome === 'xfailed' || outcome === 'xpassed') {
      return ' - xfail reason: ' + this.get('stage.xfail_reason');
    } else {
      return '';
    }
  }.property('stage.outcome'),

  observeStageForCollapse: function() {
    var outcome = this.get('stage.outcome');
    var level = levelForOutcome(outcome);
    this.set('collapsed', (level !== 'danger'));
  }.observes('stage.outcome').on('init'),

  actions: {
    toggleCollapsed: function() {
      var val = this.get('collapsed');
      this.set('collapsed', !val);
    }
  }
});
