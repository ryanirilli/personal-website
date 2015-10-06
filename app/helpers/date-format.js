import Ember from 'ember';

export function dateFormat(params/*, hash*/) {
  let date = moment(params[0]);
  return date.format(params[1]);
}

export default Ember.Helper.helper(dateFormat);
