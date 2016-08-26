var React = require('react');

var FruitRow = React.createClass({
	render: function(){
		return(
			<div className="FruitRow">
				<ul>
					<li>{this.props.children}</li>
					<li>{this.props.property}</li>
				</ul>
			</div>
		);
	}
});

module.exports = FruitRow;