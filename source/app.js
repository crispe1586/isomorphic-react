var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var NotFoundRoute = ReactRouter.NotFoundRoute;

var routerHistory = ReactRouter.useRouterHistory;
var createHistory = require('../node_modules/react-router/node_modules/history').createHashHistory;

var appHistory = routerHistory(createHistory)({ queryKey: false });

var FruitContainer = require('./components/FruitContainer.react');
var FruitDetail = require('./components/FruitDetail.react');



ReactDOM.render(
	(
		<Router history={appHistory}>
      		<Route path="/" component={FruitContainer} />
       		<Route path="/fruit/:name" component={FruitDetail} />
    	</Router>		
	),
	document.getElementById('container')
);