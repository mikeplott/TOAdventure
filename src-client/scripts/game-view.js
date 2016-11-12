const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')
const ModalView = require('./modal-view.js')
const {HomeView, dummyUsers, NavView} = require("./home-view.js")
const {CharModel, CharCollection} = require('./model-chars.js')
const {AvatarModel, AvatarCollection} = require('./model-assets')

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
            <div>
               <div>
                  <h2>LeaderBoard</h2>
                  <ol>
                     {leaderBoardData}
                  </ol>
               </div>
               <div>
                  <div>
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

            )
      }
   })




   const GameCanvas = React.createClass({

      componentDidMount: function(){
         const canvas = this.refs.gameCanvas
         var game = canvas.getContext("2d");
var x = 0;
var y = 0;
var xspeed = 0;
var yspeed = 0;
var gravity = 1;
var height = 50;
var ground = canvas.height - height;
var jumpCount = 0;
var level = 1;
var itemCount = 15;
var gameState = true;
var startTime = Date.now() + 3000;



var obstacleArray = []
var displayedObjects = []


var background = new Image();
background.src = "http://i.imgur.com/CpX4uAU.jpg";
background.onload = function(){
    game.drawImage(background,0,0,400,150);
}

var playerRight = new Image();
playerRight.src = "https://raw.githubusercontent.com/mikeplott/TOAdventure/master/public/avatars/elf-standing.png";
var imageRatio = 1;
playerRight.onload = function() {
  imageRatio = playerRight.width / playerRight.height;
}
var playerLeft = new Image();
playerLeft.src = "https://raw.githubusercontent.com/mikeplott/TOAdventure/master/public/avatars/elf-standing.png";

var playerJump = new Image();
playerJump.src = "https://raw.githubusercontent.com/mikeplott/TOAdventure/master/public/avatars/elf-jumping.png";
var playerImage = playerRight;

function draw() {

   game.font = "20px Arial";
  game.fillText("Score:", 20, 20);

  game.drawImage(background,0,0,canvas.width,canvas.height);
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




  if (obstacleArray.length === 0){

    itemCount = itemCount + (5 * level)
    for (var i = 0; i < itemCount ; i++){
      var theY = (Math.floor(Math.random() * 115) + 25)
      console.log(theY)
      obstacleArray.push({
        name: 'item',
        x: 900,
        y: theY
      })
    }
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


  game.drawImage(playerImage, x, y, height * imageRatio, height);
}

const gameUpdate = setInterval(draw, 20);

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



var obstacle = function (O) {
   O.active = true;

  O.xVelocity = 0;
  O.yVelocity = 0;
  O.width = 3;
  O.height = 3;
  O.color = "#FFF";

  O.inBounds = function() {
    if(O.y >= 0){
      return false
    }
  }

  O.draw = function() {
    game.fillStyle = this.color;
    game.fillRect(this.x, this.y, this.width, this.height);
  };

  O.update = function() {
    O.x += -3;
    O.y += 0;



    if(O.x <= 0){
      O.active = false
    } else {
      O.active = O.active
    }


  };

  return O;

}



var objectThrowing = function(){
  if(Date.now() > startTime){
  var crntItem = obstacleArray[0]


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

const objectCycle = setInterval(objectThrowing, 1000)

var collision = function (item, me){

  if(item.x < me.x + height * imageRatio &&
     item.x + item.width > b.x &&
     item.y < me.y + height &&
     item.y + item.height > me.y){
    return true
  }

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

         // const canvas = this.refs.gameCanvas


         return(

            <canvas className="game-canvas" ref="gameCanvas"></canvas>
         )
      }



   })





            module.exports = GameView
