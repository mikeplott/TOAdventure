const Backbone = require('backbone')

const SignupModel = Backbone.Model.extend({

   url: "/signup",


   initialize: function(){
   },
})


const SignupCollection = Backbone.Collection.extend({

   model: SignupModel,
   // set route to get route on java side
   url: "/signup"

})

module.exports = {SignupModel, SignupCollection}
