var React = require('react');


var PlayerBox = React.createClass({



  render: function() {

    return(
      <div className="PlayerBox">

        <div id="ship">
        <canvas id="canvas" width="900" height="500">
        {this.props.ship()}
        </canvas>

        </div>

      </div>
      )
  }

})

module.exports = PlayerBox;