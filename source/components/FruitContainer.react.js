var React = require('react');
var FruitSearch = require('./FruitSearch.react');
var FruitList = require('./FruitList.react');

var Fruits = require('../../public/fruits.json');

var FruitContainer = React.createClass({
	searchBy: function(ev){
		this.setState({searchValue:ev.target.value});
	},
	getInitialState: function(){
		return {
			searchValue: "",
			fruitList:[]
		};
	},
	componentDidMount:function(){
		this.setState({fruitList:Fruits});
	},
	render: function(){
		return(
			<div className="FruitContainer">
 				<h1>No esperes más! Encuentra toda la info sobre tu pokémon favorito.</h1>
 				<FruitSearch searchBy={this.searchBy} />
 				<FruitList fruitList={this.state.fruitList} searchValue={this.state.searchValue} />
 			</div>
		);
	}
});

module.exports = FruitContainer;