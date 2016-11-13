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

      userLogin ={
         username: this.refs.username.value,
         password: this.refs.password.value
      }
      let sendUser = new UserModel()

      sendUser.set(userLogin)

      sendUser.save().then(function(serverRes){
         console.log(serverRes)
      })

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
                  <input type="text" ref="username"/>
                  <input type="text" ref="password"/>

                  <input type='submit'/>

               </form>

            </div>
         </div>
                        )
   }
})






const AvatarEl = React.createClass({


   render: function(){

      return (
         <div>
            <h3>{this.props.avatarName}</h3>
            <img src={this.props.fileName} alt=""/>
            <input type="checkbox" ref={this.props.avatarName}/>
         </div>

      )
   }



})


module.exports = ModalView
