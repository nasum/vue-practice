$(document).ready(function(){
  var MyComponent = Vue.extend({
    template: '<div>component</div>'
  });

  var MyComponentList = Vue.extend({
    template: '<ul><li v-repeat="list" v-on="click: clickList">{{$value}}</li></ul>',
    data: function(){
      return {
        list: 10
      }
    },
    methods: {
      clickList: function(e){
        alert(e.targetVM.$index);
      }
    }
  });

  var ComponentList = Vue.extend({
    template: '<ul><li v-repeat="list"><my-component></my-component></li></ul>',
    data: function(){
      return {
        list: 5
      }
    },
    components: {
      myComponent: MyComponent
    }
  });

  var vue = new Vue({
    el: 'body',
    components: {
      myComponent: MyComponent,
      myListComponent: MyComponentList,
      componentList: ComponentList
    }
  });
});
