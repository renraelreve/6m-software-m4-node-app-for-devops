require("dotenv").config();
const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

const controller = require("./controller");

// Route definitions
app.get('/', controller.print);
app.get('/home', controller.home);
app.post('/user', controller.createUser);

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`);
});
