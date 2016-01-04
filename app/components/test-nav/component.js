import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['panel', 'panel-default'],

  summaryCollapsed: true,
  filtersCollapsed: true,

  tests: null,
  availableSortKeys: [
    'name',
    'duration',
    'outcome'
  ],
  sortKey: 'outcome',
  sortKeys: ['outcomeSortValue'],
  sortOrder: 'asc',

  filterValues: [],

  sortedTests: Ember.computed.sort('filteredTests', 'sortKeys'),
  filteredTests: Ember.computed.filter('tests', function(test) {
    var filters = this.get('filterValues');
    if (filters.get('length') === 0) {
      return true;
    }
    return filters.contains(test.get('outcome'));
  }).property('tests', 'filterValues.[]'),

  observeSortChange: function() {
    var key = this.get('sortKey');
    var order = this.get('sortOrder');

    // sorting by the string values doesn't make sense here
    if (key === 'outcome') {
      key = 'outcomeSortValue';
    }

    if (order === 'desc') {
      key += ':desc';
    }

    var currentKeys = this.get('sortKeys');

    if (key !== currentKeys[0]) {
      this.set('sortKeys', [key]);
    }
  }.observes('sortOrder', 'sortKey'),

  actions: {
    toggleSummaryCollapsed: function() {
      var val = this.get('summaryCollapsed');
      this.set('summaryCollapsed', !val);
    },

    toggleFiltersCollapsed: function() {
      var val = this.get('filtersCollapsed');
      this.set('filtersCollapsed', !val);
    }
  }
});
