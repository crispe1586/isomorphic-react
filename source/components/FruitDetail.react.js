var React = require('react');
var FruitImage = require('./FruitImage.react');
var FruitRow = require('./FruitRow.react');
var FruitEvolutions = require('./FruitEvolutions.react');

var Fruits = require('../../public/fruits.json');

var FruitDetail = React.createClass({
	render: function(){
		//got from url
		var fruitName = this.props.params.name;
		var fruit = Fruits.filter(function(fr){
			return fr.name.toLowerCase().match(fruitName.toLowerCase());
		});
		if(!fruit){
			return <h1>{fruitName} is not a fruit</h1>
		}else{
			
			return <section className="FruitDetail">
							
							<div className="FruitDetailImages">
								<FruitImage fruitName={fruitName} />
								<FruitEvolutions fruit={fruit} />
							</div>

							<div className="FruitDetailInfo">
								<h4>{fruit.name}</h4>
								<FruitRow property={fruit[0].type}>
									Type
								</FruitRow>
								<FruitRow property={fruit[0].species}>
									Species
								</FruitRow>
								<FruitRow property={fruit[0].stats.attack}>
									Attack
								</FruitRow>
								<FruitRow property={fruit[0].stats.defense}>
									Defense
								</FruitRow>
								<FruitRow property={fruit[0].stats.hp}>
									Hp
								</FruitRow>
								<FruitRow property={fruit[0].stats.speed}>
									Speed
								</FruitRow>
							</div>
						</section>
		}

	}
});

module.exports = FruitDetail;