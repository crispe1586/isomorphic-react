var React = require('react');

var FruitSearch = React.createClass({
	render: function(){
		return (
			<div className="FruitSearch">
				<input type="text" placeholder="Look for a fruit..." onChange={this.props.searchBy} />
				<img src="images/search.png" />
			</div>
		);
	}

});

module.exports = FruitSearch;