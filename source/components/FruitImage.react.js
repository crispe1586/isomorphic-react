var React = require('react');

var FruitImage = React.createClass({
	render: function(){
		return(
			<figure className="FruitImage">
				<img src={"images/fruits/"+this.props.fruitName+".jpg"} />
			</figure>
		);
	}
});

module.exports = FruitImage;