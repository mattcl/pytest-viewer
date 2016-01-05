import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loadData: function(data) {
      // empty the store first, since we don't want to persist data between
      // file loads
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
      }).then(() => {
        data = $.parseJSON(data);

        return this.store.push(data);
      }).then(() => {
        var promises = this.store.peekAll('test').map(function(test) {
          return test.save();
        });

        return Ember.RSVP.all(promises);
      }).then(() => {
        var promises = this.store.peekAll('report').map(function(report) {
          return report.save();
        });

        return Ember.RSVP.all(promises);
      }).then(() => {
        this.transitionTo('reports');
      });
    }
  }
});
