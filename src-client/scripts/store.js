const Backbone = require('backbone')
const ACTIONS = require('./actions.js')

const STORE = {

   data: {
      all_users: [],
      avatars: [],
      currentView: "Home",
<<<<<<< HEAD
      currentUser: [],
      highscore: []
=======
      selectedAvatar: '',
      currentUser: []
>>>>>>> 560f0b8b340234bb643573c375f6346fc1c47921

   },

   setStore: function(storeProp, payload){
      this.data[storeProp] = payload
      Backbone.Events.trigger('storeChange')
   },

   getStoreData: function(){
      return this.data
   },

   onChange: function(someFunc){
      Backbone.Events.on('storeChange', someFunc)
   }

}

module.exports = STORE
