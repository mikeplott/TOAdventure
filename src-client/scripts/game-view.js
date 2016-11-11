const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')


const GameView = React.createClass({


   render: function(){

      return(
         <div>
            <PopupModal/>
            <nav>
               <h3>Title</h3>
               <div>
                  {userData}
               </div>
            </nav>
            <div>
               <div>
                  <h2>LeaderBoard</h2>
                  <ol>
                     {leaderBoardData}
                  </ol>
               </div>
               <div>
                  <div>
                     <canvas></canvas>
                  </div>
               </div>
            </div>
            <footer>
               <div>
                  <p>sources and contributions</p>
               </div>
               <div>
                  <p>github profiles</p>
               </div>
            </footer>
         </div>

      )
   }
})
