const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')
const ModalView = require('./modal-view.js')


let dummyUsers = [
   {
      userName: 'victor',
      score: '1000',
      level: '5'
   },
   {
      userName: 'beka',
      score: '14500',
      level: '4'
   },
   {
      userName: 'torbor',
      score: '109800',
      level: '2'
   },
   {
      userName: 'ictober',
      score: '1009860',
      level: '5'
   },
   {
      userName: 'lizzy',
      score: '54600',
      level: '8'
   },
   {
      userName: 'victor2',
      score: '8765',
      level: '5'
   }

]


const HomeView = React.createClass({




   render: function(){


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
      return (

         <div>
            <nav>
               <h3>Title</h3>
               <div>
                  <button className="btn btn-primary"></button>
                  <input type="submit" value="Login"/>
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
                     <h1>TIYO Adventure</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                     <form>
                        <input type="submit" value="Login"/>
                        <input type="submit" value="Sign-up"/>
                     </form>
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

module.exports = {HomeView, dummyUsers}
