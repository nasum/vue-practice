$(document).ready(function(){
  var MyComponent = Vue.extend({
    template: '<div>component</div>'
  });

  var vue = new Vue({
    el: 'body',
    components: {
      myComponent: MyComponent
    }
  });
});
