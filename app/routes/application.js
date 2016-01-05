import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    clearReports: function() {
      this.transitionTo('');
      this.store.findAll('report').then(function(reports) {
        reports.toArray().forEach(function(report) {
          report.destroyRecord();
        });
      });
      this.store.findAll('test').then(function(tests) {
        tests.toArray().forEach(function(test) {
          test.destroyRecord();
        });
      });
      this.store.unloadAll('test');
      this.store.unloadAll('report');
    }
  }
});
