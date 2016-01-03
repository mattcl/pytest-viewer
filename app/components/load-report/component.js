import Ember from 'ember';

export default Ember.TextField.extend({
  type: 'file',
  classNames: ['ember-view', 'file'],
  change: function(event) {
    var input = event.target;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e) => {
        var uploadedFile = e.srcElement.result;
        this.sendAction('action', uploadedFile);
      };
      reader.readAsText(input.files[0]);
    }
  }
});
