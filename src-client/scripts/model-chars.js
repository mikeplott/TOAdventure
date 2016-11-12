const Backbone = require('backbone')

const CharModel = Backbone.Model.extend({

   url: "",


   initialize: function(){
   },
})


const CharCollection = Backbone.Collection.extend({

   model: CharModel,
   // set route to get route on java side
   url: ""

})








module.exports = {CharModel, CharCollection}
