const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')


const ModalView = React.createClass({
   getInitialState: function(){
      return {crntModalState: 'login'}
   },

   render: function(){



         return (
            <div>
               <nav>
                  <span>X</span>
               </nav>
               <div>
                  <LoginModal crntDisplay={this.state.crntModalState}/>
                  <CharPickModal/>
               </div>
            </div>

      )
   }

})

const LoginModal = React.createClass({


   _handleClick: function(){

      this.setState({view: signup})
   },

   render: function(){


      return (
         <div>
            <h3>Adventurer Info..</h3>
            <form>
               <input type='text'/>
               <input type='text'/>
               <input type='submit' value='Login'/>
               <input type='submit' value='Sign-up'/>
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
