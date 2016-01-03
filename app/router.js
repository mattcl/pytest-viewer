import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('reports', function() {
    this.route('report', {path: 'reports/:report_id'}, function() {
      this.route('tests', function() {
        this.route('test', {path: 'tests/:test_id'});
      });
    });
  });
});

export default Router;
