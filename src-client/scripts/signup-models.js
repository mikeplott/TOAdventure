const Backbone = require('backbone')

const SignUpModel = Backbone.Model.extend({

   url: "/signup",


   initialize: function(){
   },
})


const SignUpCollection = Backbone.Collection.extend({

   model: SignUpModel,
   // set route to get route on java side
   url: "/signup"

})

module.exports = {SignUpModel, SignUpCollection}
