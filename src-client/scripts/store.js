const Backbone = require('backbone')
const ACTIONS = require('./actions.js')

const STORE = {

   data: {
      all_users: [],
      avatars: [],
      currentView: "Home",
      currentUser: [],
      highscore: [],
      selectedAvatar: '',
      currentUser: []

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
