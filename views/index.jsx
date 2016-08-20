var React = require('react');

var Index = React.createClass({
  render: function() {
    return (
      <html lang="es">
        <head>
          <meta charser="utf-8" />
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="stylesheet" href="styles/style.css" />
        </head>
        <body>
          <header>
            <div>
              <figure>
                <img src="images/logo.png" width="220"/>
              </figure>
              <a href="https://github.com/crispe1586/pokedex-react" target="_blank">
                <img src="images/repo.png" width="40"/> 
              </a>
            </div>
          </header>
          <section id="container">
            <h1>Genial! Hemos hecho el render inicial de nuestra App</h1>
            <p>Ahora nuestra app se llevará muy bien con nuestro amigo el SEO :)</p>
          </section>
          
          <script src="js/build.js"></script>
        </body>
      </html> 
    );
  }
});

module.exports = Index;