const Backbone = require('backbone')

const HighScoreModel = Backbone.Model.extend({

   url: "/highscore",


   initialize: function(){
   },
})


const HighScoreCollection = Backbone.Collection.extend({

   model: HighScoreModel,
   // set route to get route on java side
   url: "/highscore"

})



module.exports = {HighScoreModel, HighScoreCollection}
