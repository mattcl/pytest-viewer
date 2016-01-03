import Ember from 'ember';

export function outcomeStyle(params, namedArgs) {
  var outcome = params[0];
  var klass = '';
  if (outcome === 'passed') {
    klass = 'success';
  } else if (outcome === 'xfailed' || outcome === 'skipped') {
    klass = 'warning';
  } else {
    klass = 'danger';
  }

  if (namedArgs.prefix) {
    klass = namedArgs.prefix + klass;
  }

  if (namedArgs.additional) {
    klass = namedArgs.additional + ' ' + klass;
  }

  return klass;
}

export default Ember.Helper.helper(outcomeStyle);
