const Backbone = require('backbone')

const UserModel = Backbone.Model.extend({

   url: "/login",


   initialize: function(){


   },
})


const UserCollection = Backbone.Collection.extend({

   model: UserModel,
   // set route to get route on java side
   url: "/login"

})


module.exports = {UserModel, UserCollection}
