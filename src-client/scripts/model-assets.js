const Backbone = require('backbone')

const ObstacleModel = Backbone.Model.extend({

   url: "/random-assets",


   initialize: function(){
   },
})


const ObstacleCollection = Backbone.Collection.extend({

   model: ObstacleModel,
   // set route to get route on java side
   url: "/random-assets"

})

module.exports = {ObstacleModel, ObstacleCollection}
