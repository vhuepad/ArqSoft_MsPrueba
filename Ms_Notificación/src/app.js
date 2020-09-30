const express = require( 'express' ); // Framework
const morgan = require( 'morgan' );   // Show browser requests
const app = express( );

//Set port, listen for requests
app.set( 'port', process.env.PORT || 3000 ); //---env...: tome el puerto que da el so en caso de cloud

// middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/ms_nf', require('./routes/notifications'));

module.exports = app;