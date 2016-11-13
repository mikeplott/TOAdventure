const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');
const ACTIONS = require('./actions.js')
const STORE = require('./store.js')
const {AppView} = require('./view-controller.js')

const AppRouter = Backbone.Router.extend({

   routes: {
      'game': "showGame",
      'login': "showLogin",
      'signup': "showSignup",
      '': "showHome"

   },
   showHome: function(){

console.log('hello')
      ReactDOM.render(<AppView currentView="home"/>, document.querySelector("#app-container"))
   },

   showLogin: function(){

      ReactDOM.render(<AppView currentView="login"/>, document.querySelector("#app-container"))
   },

   showSignup: function(){

      ReactDOM.render(<AppView currentView="signup"/>, document.querySelector("#app-container"))
   },

   showGame: function(){
      console.log('game viieww')

      ReactDOM.render(<AppView currentView="game"/>, document.querySelector("#app-container"))
   },

   initialize: function(){

      Backbone.history.start()
   }

})



   new AppRouter()
