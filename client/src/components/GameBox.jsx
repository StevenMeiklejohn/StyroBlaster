var React = require('react');
var BackgroundBox = require('./BackgroundBox.jsx');





var GameBox = React.createClass({


  // componentDidMount: function() {
  //   console.log('Mounted');
  // },

  drawBackground: function(){
    console.log("drawBackground called");
    var canvas = window.document.getElementById("canvasMain");
    console.log(canvas);
    var ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 360;

    //draw Image
    var velocity=100;
    var bgImage = new Image();
    bgImage.addEventListener('load',drawImage,false);
    bgImage.src = "https://i.ytimg.com/vi/T40NSkd7Olc/maxresdefault.jpg";
    console.log(bgImage);

    function drawImage(time){  
    console.log("drawImage called");        
            var framegap=time-lastRepaintTime;
        lastRepaintTime=time;
        var translateX=velocity*(framegap/1000);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        var pattern=ctx.createPattern(bgImage,"repeat-x");
        ctx.fillStyle=pattern;
        ctx.rect(translateX,0,bgImage.width,bgImage,bgImage.height);
         ctx.fill();
            ctx.translate(-translateX,0); 
      requestAnimationFrame(drawImage);
    }
    var lastRepaintTime=window.performance.now();
  },





  render: function() {
    return (
      <div className="GameBox">
        <h1 id="title">StyroBlaster</h1>


        <BackgroundBox
        drawBackground={this.drawBackground}
        />

      </div>  
        


        


    );
  }

})
  
  module.exports = GameBox;