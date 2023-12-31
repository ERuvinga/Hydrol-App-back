
// include connect mongoose to cluster mangodb
require("./db/mongo_db");

const express = require('express');
const app = express();  // methode express

//Routes 
const testRoute = require('./Routes/test');
const AuthRoute = require("./Routes/Authentification");
const CheckAuthUser = require("./Routes/Authentification/Auth");
const SearchUserRoute = require("./Routes/Users")

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});

app.use('/test', testRoute); // router checking if remote server runing
app.use('/AuthUser', CheckAuthUser);
app.use('/Authentification', AuthRoute);

// userRoutes
app.use("/Users",SearchUserRoute);


module.exports = app;
