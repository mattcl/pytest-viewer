import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    load: function(data) {
      this.transitionTo('');
      // empty the store first, since we don't want to persist data between
      // file loads
      this.store.findAll('report').forEach(function(report) {
        report.get('tests').forEach(function(test) {
          test.destroyRecord();
        });
        report.destroyRecord();
      });

      this.store.unloadAll();

      data = $.parseJSON(data);

      this.store.push(data);

      // commit the records we just pushed
      this.store.peekAll('report').forEach((report) => {
        report.get('tests').forEach(function(test) {
          test.save();
        });
        report.save().then(() => {
          this.transitionTo('report', report.get('id'));
        });
      });

    }
  }
});
