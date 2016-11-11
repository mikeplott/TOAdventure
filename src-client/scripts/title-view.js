const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')


const TitleView = React.createClass({




   render: function(){



      return (
         <div>
            <h1>TIYO Adventure</h1>
            <div>
               <p>Your adventure begins here..</p>
               <button>Enter..</button>
            </div>
         </div>
      )
   }

})
