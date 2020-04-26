'use strict';

const express = require( 'express' );
const app = express();
const homeController = require( './controllers/homeController' );
const errorController = require( './controllers/errorController');
const path = require( 'path' );
const layouts = require("express-ejs-layouts");

app.use(
    express.urlencoded({
        extended:false
    })
)
app.use(express.json());

app.set( 'views', path.join(__dirname, 'views'));
app.set( 'port', process.env.PORT || 3000 );
app.set( 'view engine', 'ejs' );
app.use(layouts);




console.log("+get homeController");
app.get( '/', homeController );

console.log('+get  homeController.showUsers');
app.get( '/users', homeController.showUsers );

console.log('+post homeController.addUsers');
app.post( '/users/submit', homeController.addUsers );

console.log('+get  homeController.postSignUpForm');
app.get ( '/contact', homeController.postSignUpForm);

app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

console.log('pass 3');
app.listen( app.get( 'port' ), () => {
  console.log( `Server running on port: ${app.get('port')}` );
} );
