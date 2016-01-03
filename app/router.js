import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('reports', function() {});
  this.route('report', {path: 'report/:report_id'}, function() {
    this.route('test', {path: 'test/:test_id'}, function() {});
  });
});

export default Router;
