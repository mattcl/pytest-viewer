import DS from 'ember-data';

export default DS.Model.extend({
  summary: DS.attr(),
  environment: DS.attr(),
  created_at: DS.attr('string'),
  tests: DS.hasMany('test', {async: false})
});
