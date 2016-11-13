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
      console.log(this.refs)

      return(
         <div>
            <NavView/>
            <div className="container">
               <div className="row">
                  <div className="col-xs-4 leader-board">
                     <h2>LeaderBoard</h2>
                     <ol>
                        {leaderBoardData}
                     </ol>
                  </div>
                  <div>
                     <div className="col-xs-8">
                        <GameCanvas/>
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
         </div>

            )
      }
   })




   const GameCanvas = React.createClass({

      componentDidMount: function(){
         const canvas = this.refs.gameCanvas
         let game = canvas.getContext("2d");
         let x = 0;
         let y = 0;
         let xspeed = 0;
         let yspeed = 0;
         let gravity = 1;
         let height = 50;
         let ground = canvas.height - height;
         let jumpCount = 0;
         let level = 0;
         let itemCount = 15;
         let gameState = true;
         let startTime = Date.now() + 3000;
         let score = 0;
         let health = 3;



         let obstacleArray = []
         let displayedObjects = []


         let background = new Image();
         background.src = "http://i.imgur.com/CpX4uAU.jpg";
         background.onload = function(){
             game.drawImage(background,0,0,400,150);
         }

         let gameEnd = new Image();
         gameEnd.src = "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-323086.png"

         let playerRight = new Image();
         playerRight.src = "https://raw.githubusercontent.com/mikeplott/TOAdventure/master/public/avatars/elf-standing.png";
         let imageRatio = 1;
         playerRight.onload = function() {
           imageRatio = playerRight.width / playerRight.height;
         }
         let playerLeft = new Image();
         playerLeft.src = "https://raw.githubusercontent.com/mikeplott/TOAdventure/master/public/avatars/elf-standing.png";

         let playerJump = new Image();
         playerJump.src = "https://raw.githubusercontent.com/mikeplott/TOAdventure/master/public/avatars/elf-jumping.png";

         let playerDeath = new Image();
         playerDeath.src = "https://raw.githubusercontent.com/mikeplott/TOAdventure/master/public/avatars/elf-death.png"

         let playerImage = playerRight;

         let fullHealth = new Image();
         fullHealth.src = "https://raw.githubusercontent.com/mikeplott/TOAdventure/master/public/ui/full-heart.png"


         let emptyHealth = new Image();
         emptyHealth.src = "https://raw.githubusercontent.com/mikeplott/TOAdventure/master/public/ui/empty-heart.png"

         function draw() {


           game.drawImage(background,0,0,canvas.width,canvas.height);
           game.font = "10px Arial";
           game.fillStyle = 'white';
           game.fillText("Level: " + level, 10, 10);
           game.fillText("Score: " + score, 10, 20);
           x = x + xspeed;
           y = y + yspeed;
           yspeed = yspeed + gravity;

           if (y > ground) {
             y = ground;
             yspeed = 0;
             jumpCount = 0;
             playerImage = playerRight
           }
           if (x < 0){
             x = 0;
           }


           if (x > canvas.width - 30){
             x = canvas.width - 30;
           }

          if(health === 3){
            game.drawImage(fullHealth, 250, 2, 15, 15)
            game.drawImage(fullHealth, 265, 2, 15, 15)
            game.drawImage(fullHealth, 280, 2, 15, 15)
          } else if (health === 2){
            game.drawImage(fullHealth, 250, 2, 15, 15)
            game.drawImage(fullHealth, 265, 2, 15, 15)
            game.drawImage(emptyHealth, 280, 2, 15, 15)
          } else if (health === 1){
            game.drawImage(fullHealth, 250, 2, 15, 15)
            game.drawImage(emptyHealth, 265, 2, 15, 15)
            game.drawImage(emptyHealth, 280, 2, 15, 15)
          } else {
            game.drawImage(emptyHealth, 250, 2, 15, 15)
            game.drawImage(emptyHealth, 265, 2, 15, 15)
            game.drawImage(emptyHealth, 280, 2, 15, 15)


            endGame();
          }




           if (obstacleArray.length === 0){

             itemCount = itemCount + 5
             for (let i = 0; i < itemCount ; i++){
               let theY = (Math.floor(Math.random() * 105) + 25)
               console.log(theY)
               obstacleArray.push({
                 name: 'item',
                 x: 900,
                 y: theY
               })
             }
           }

           if(score <= 0){
             score = 0;
           }

           displayedObjects.forEach(function(item) {
             item.draw();
           });
           displayedObjects.forEach(function(item) {
             item.update();
           });
           displayedObjects = displayedObjects.filter(function(item) {
             return item.active;
           });

           handleCollisions();


           game.drawImage(playerImage, x, y, height * imageRatio, height);
         }

         let gameUpdate = setInterval(draw, 20);

         let endGame = function(){

           game.drawImage(gameEnd, 5,30,300,100)
           clearInterval(objectCycle);
           clearInterval(gameUpdate);
           setTimeout(function(){
             y += -15;
             let fallingDeath = setInterval(function(){

             playerImage = playerDeath;  game.drawImage(background,0,0,canvas.width,canvas.height);
           game.font = "10px Arial";
           game.fillStyle = 'white';
           game.fillText("Level: " + level, 10, 10);
           game.fillText("Score: " + score, 10, 20);
             x = x;
             y = y + yspeed;
             yspeed = yspeed + gravity;
             game.drawImage(playerImage, x, y, height * imageRatio, height)
             game.drawImage(gameEnd, 5,30,300,100)
             if(y > ground){
               y = ground;
               yspeed = 0;
               clearInterval(fallingDeath)
             }
           },30)



           }, 1000)
         }

         function startMove(event) {
           // pressed left
           if (event.keyCode == 37) {
             xspeed = -5;
             playerImage = playerLeft;
           }
           // pressed right
           if (event.keyCode == 39) {
             xspeed = 5;
             playerImage = playerRight;
           }
           // pressed up
           if (event.keyCode == 38) {
             if (jumpCount < 2){
                 yspeed = -10;
                 jumpCount += 1;
                 playerImage = playerJump;
                 }
           }
         }



         let obstacle = function (O) {
            O.active = true;
           O.item = new Image()
             O.item.src = "https://raw.githubusercontent.com/mikeplott/TOAdventure/master/public/npcs/enemy1.png"
           O.xVelocity = 0;
           O.yVelocity = 0;
           O.width = 20;
           O.height = 20;
           O.color = "#FFF";

           O.inBounds = function() {
             if(O.y >= 0){
               return false
             }
           }

           O.draw = function() {
             game.drawImage(this.item,this.x, this.y, this.width, this.height)
             // game.fillStyle = this.color;
             // game.fillRect(this.x, this.y, this.width, this.height);
           };

           O.update = function() {
             O.x += -3;
             O.y += 0;



             if(O.x <= 0){
               score += 1;
               O.active = false
             } else {
               O.active = O.active
             }


           };

           return O;

         }



         let objectThrowing = function(){
           if(Date.now() > startTime){
           let crntItem = obstacleArray[0]
            if(displayedObjects.length === 0){
             level += 1;
           }

            displayedObjects.push(obstacle({
              speed: -10,
              x: crntItem.x,
              y: crntItem.y
            }));
           obstacleArray.splice(0,1)
           if(obstacleArray.length === 0){

             startTime = Date.now() + 10000
           }
           console.log(obstacleArray.length)
         }


         }

         let objectCycle = setInterval(objectThrowing, 1000)

         let collision = function (item, me){

           if(item.x < x + height * imageRatio &&
              item.x + item.width > x &&
              item.y < y + height &&
              item.y + item.height > y){
             return true
           }

         }

         let handleCollisions = function (){
           displayedObjects.forEach(function(item){
             if(collision(item)){
               item.active = false
               score += -5;
               if(health > 0){
                 health += -1;
               }
             }
           })
         }


         document.onkeydown = startMove;

         function stopMove(event) {
           if (event.keyCode == 37 || event.keyCode == 39) {
             xspeed = 0;
           }
         }

         document.onkeyup = stopMove;

      },



      render: function(){



         return(

            <canvas className="game-canvas" ref="gameCanvas"></canvas>
         )
      }



   })





module.exports = GameView
