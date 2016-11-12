const Backbone = require('backbone')
const {UserModel, UserCollection} = require('./model-users.js')
const {CharModel, CharCollection} = require('./model-chars.js')
const {ObstacleModel, ObstacleCollection} = require('./model-assets.js')
const {AvatarModel, AvatarCollection} = require("./model-avatars.js")
const STORE = require("./store.js")

const ACTIONS = {

   fetchUserData: function(){
      let userCollInst = new UserCollection()
      return userCollInst.fetch().then(function(){
         STORE.setStore('all_users', userCollInst)
      })

   },

   getAllAvatars: function(){
      let avtrs = new AvatarCollection()

      return avtrs.fetch().then(function(){
         avtrs.models

      })
   },

   handleUserLogin: function(usrName){

   },
// EXECUTE TO GRAB RANDOM ASSETS
   getObstacles: function(){
      let obst = new ObstacleCollection()

      obst.fetch().then(function(){

         return obst.models
      })
   },

   createNewUser: function(modlVals){
      let newUser = new UserModel()

      newMod.set(modlVals)

      newMod.save().then(function(serverRes){
         ACTIONS.fetchUserData()
      })

   },

   fetchCharData: function(){
      let charCollInst = new CharCollection()

      return charCollInst.fetch().then(function(){
         STORE.setStore('characters', charCollInst)
      })


   },

   changeView: function(viewInput){

      STORE.setStore('currentView', viewInput)

   }

}




module.exports = ACTIONS
