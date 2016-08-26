var React = require('react');
var uid = require('uid');

var FruitEvolutions = React.createClass({
	render: function(){
		return(
			<div className="FruitEvolutions">
				<h4>Evolutions</h4>
				{this.props.fruit[0].evolution.map(function(evo){
					<figure key={uid()}>
						<img src={"images/fruits/"+this.evo+".jpg"} width="80" />
					</figure>
				})}
			</div>
		);
	}
});

module.exports = FruitEvolutions;