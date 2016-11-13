const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')


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
                  <CharPickModal/>
               </div>
            </div>
         )
      }
   }

})

const LoginModal = React.createClass({


   _handleClick: function(evt){
      evt.preventDefault()
      console.log(this.refs.username.value)
      console.log(this.refs.password.value)
      console.log(evt)

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

   render: function(){

      return (
         <div>
            <h3>Pick your adventurer..</h3>
            <div>
               <input type='checkbox'/>
               <input type='checkbox'/>
               <input type='checkbox'/>
               <input type='checkbox'/>
               <input type='checkbox'/>
            </div>
            <input type='submit'/>
         </div>
      )
   }
})


module.exports = ModalView
