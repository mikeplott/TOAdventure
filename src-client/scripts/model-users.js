const Backbone = require('backbone')

const UserModel = Backbone.Model.extend({

   url: "",


   initialize: function(){


   },
})


const UserCollection = Backbone.Collection.extend({

   model: UserModel,
   // set route to get route on java side
   url: ""

})


module.exports = {UserModel, UserCollection}
