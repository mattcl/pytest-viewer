import Ember from 'ember';
import levelForOutcome from 'pytest-viewer/utils/level-for-outcome';

export function outcomeStyle(params, namedArgs) {
  var outcome = params[0];
  var klass = levelForOutcome(outcome);

  if (namedArgs.prefix) {
    klass = namedArgs.prefix + klass;
  }

  if (namedArgs.additional) {
    klass = namedArgs.additional + ' ' + klass;
  }

  return klass;
}

export default Ember.Helper.helper(outcomeStyle);
