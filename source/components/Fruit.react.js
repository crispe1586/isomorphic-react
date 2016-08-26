var React = require('react');

var Fruit = React.createClass({
	render: function(){
		var fruit = this.props.fruit;
		return(
			<div className="Fruit">
				<figure>
					<a href={'/#fruit/'+fruit.name}>
              			<img src={"http://img.pokemondb.net/sprites/black-white/anim/normal/"+fruit.name+".gif"} />
              		</a>
         		</figure>
       			<div>
          			<span>{fruit.id}</span> - {fruit.name}
       			</div>
			</div>
		);
	}
});

module.exports = Fruit;