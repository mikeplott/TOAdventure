const Backbone = require('backbone')

const AvatarModel = Backbone.Model.extend({

   url: "/avatars",


   initialize: function(){
   },
})


const AvatarCollection = Backbone.Collection.extend({

   model: AvatarModel,
   // set route to get route on java side
   url: "/avatars"

})



module.exports = {AvatarModel, AvatarCollection}
