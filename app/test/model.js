import DS from 'ember-data';

export default DS.Model.extend({
  duration: DS.attr('number'),
  outcome: DS.attr('string'),
  name: DS.attr('string'),
  setup: DS.attr(),
  teardown: DS.attr(),
  call: DS.attr(),

  // TODO: make this less stupid
  outcomeSortValue: function() {
    var outcome = this.get('outcome');

    if (outcome === 'error') {
      return 0;
    }

    if (outcome === 'failed') {
      return 1;
    }

    if (outcome === 'xpassed') {
      return 2;
    }

    if (outcome === 'skipped') {
      return 3;
    }

    if (outcome === 'xfailed') {
      return 4;
    }

    if (outcome === 'passed') {
      return 5;
    }

  }.property('outcome')
});
