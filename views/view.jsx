var React = require('react');

var View = React.createClass({
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
              crispe
            </div>
          </header>
          <section id="container">
          </section>
          
          <script src="js/build.js"></script>
        </body>
      </html> 
    );
  }
});

module.exports = View;