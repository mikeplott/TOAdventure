const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')
const {AvatarModel, AvatarCollection} = require("./model-avatars.js")

const ACTIONS = require('./actions.js')


const ModalView = React.createClass({
   getInitialState: function(){
      return {crntModalState: ''}
   },

   render: function(){

      if(this.props.crntView === ''){

         return (
            <div>

            </div>
         )
      }else if(this.props.crntView === "login"){
         return (
            <div>
               <nav>
                  <span>X</span>
               </nav>
               <div>
                  <LoginModal/>
               </div>
            </div>

         )
      }
      else{
         return (
            <div>
               <nav>
                  <span>X</span>
               </nav>
               <div>
                  <CharPickModal chars={this.props.avatarData}/>
               </div>
            </div>
         )
      }
   }

})

const LoginModal = React.createClass({


   _handleClick: function(evt){
      evt.preventDefault()

      let userLogin ={
         username: this.refs.username.value,
         password: this.refs.password.value
      }
      ACTIONS.handleUserLogin(userLogin)

   },



   render: function(){


      return (
         <div>
            <h3>Adventurer Info..</h3>
            <form>
               <p>Username</p>
               <input ref="username" type='text'/>
               <p>Password</p>
               <input ref="password" type='text'/>
               <input type='submit' value='Login' onClick={this._handleClick}/>
            </form>
         </div>
      )
   }
})



const CharPickModal = React.createClass({


   componentWillMount: function(){

      ACTIONS.getAllAvatars()
   },
   _onSubmit: function(evt){
      evt.preventDefault()

      let newUser ={
         username: this.refs.username.value,
         password: this.refs.password.value,
         filename: "hello"

      }
      console.log(newUser)



   },

   render: function(){





      return (
         <div>
            <h3>Pick your adventurer..</h3>

            <div>
               {this.props.chars.map(function(obj, i){

                  console.log(obj)
                     return <AvatarEl key={i} fileName={obj.get('filename')} avatarName={obj.get('race')}/>
               })}


               <form action="">
                  <p>Username:</p>
                  <input type="text" ref="username"/>
                  <p>Password:</p>
                  <input type="password" ref="password"/>

                  <input type='submit'onClick={this._onSubmit}/>

               </form>

            </div>
         </div>
                        )
   }
})






const AvatarEl = React.createClass({
   _selectedChar: function(){



   },

   render: function(){



      return (
         <div>
            <h3>{this.props.avatarName}</h3>
            <img src={this.props.fileName} alt=""/>
            <input onClick={type="checkbox"} ref={this.props.avatarName}/>
               </div>

               )
   }



})


module.exports = ModalView
