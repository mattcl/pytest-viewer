import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    clearReports: function() {
      this.transitionTo('');
      this.store.findAll('test').then(function(tests) {
        var promises = tests.toArray().map(function(test) {
          return test.destroyRecord();
        });

        return Ember.RSVP.all(promises);
      }).then(() => {
        return this.store.findAll('report');
      }).then(function(reports) {
        var promises = reports.toArray().map(function(report) {
          return report.destroyRecord();
        });

        return Ember.RSVP.all(promises);
      }).then(() => {
        this.store.unloadAll('test');
        this.store.unloadAll('report');
      });
    }
  }
});
