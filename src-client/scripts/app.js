const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');
const ACTIONS = require('./actions.js')
const STORE = require('./store.js')
const {AppView} = require('./view-controller.js')

const AppRouter = Backbone.Router.extend({

   routes: {
      'game/:user_id': "showGame",
      'login': "showLogin",
      'signup': "showSignup",
      '': "showHome"

   },

   showHome: function(){

console.log('hello')
      ReactDOM.render(<AppView currentView="home"/>, document.querySelector("#app-container"))
   },

   showLogin: function(){

      return renderDom(<AppView currentView="login"/>)
   },

   showSignup: function(){

      // return renderDom(<AppView currentView="signup"/>)
   },

   showGame: function(){

      // return renderDom(<AppView currentView="game"/>)
   },

   initialize: function(){

      Backbone.history.start()
   }



})










         new AppRouter()
