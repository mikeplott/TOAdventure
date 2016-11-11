const React = require('react')
const {HomeView, dummyUsers} = require('./home-view.js')


const AppView = React.createClass({

   setInitialState: function(){


      return STORE.getStoreData()
   },

   render: function(){
      switch (this.props.currentView) {
         case "home":
            return <HomeView/>
            break;
         case "login":
            return <LoginView/>
            break;
         case "signup":
            return <SignUpView/>
         case "game":
            return <GameView/>
         default:
            return <h1> Page Not Found</h1>
            break;
      }

   }


})


module.exports = {AppView}
