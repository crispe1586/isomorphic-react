var React = require('react');
var Fruit = require('./Fruit.react')

var FruitList = React.createClass({
	render: function(){
		var fruitList = this.props.fruitList;
		var searchValue = this.props.searchValue;
		return (
			<div className="FruitList">
			{fruitList.map(function(fruit,index){
				if(fruit.name.search(searchValue) > -1){
				return <Fruit key={fruit.id} fruit={fruit} />
				}
			})}
			</div>
		);
	}

});

module.exports = FruitList;