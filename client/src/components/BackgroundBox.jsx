var React = require('react');


var BackgroundBox = React.createClass({



  render: function() {

    return(
      <div className="BackGroundBox">

        <div id="main">
        <canvas id="canvasMain">
        {this.props.drawBackground()}
        </canvas>
        </div>

      </div>
      )
  }

})

module.exports = BackgroundBox;