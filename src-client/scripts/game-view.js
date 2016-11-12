const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')
const ModalView = require('./modal-view.js')
const {HomeView, dummyUsers, NavView} = require("./home-view.js")

let leaderBoardData = dummyUsers.map((someData, i)=>{
   return (
      <li key={i}>
         <p>
            <span>{someData.userName}</span>
            <span>{someData.score}</span>
         </p>
      </li>
   )
})


const GameView = React.createClass({


   render: function(){

      return(
         <div>
            <NavView/>
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

            module.exports = GameView
