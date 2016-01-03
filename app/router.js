import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('reports', function() {
    this.route('report', function() {
      this.route('tests', function() {
        this.route('test');
      });
    });
  });
});

export default Router;
