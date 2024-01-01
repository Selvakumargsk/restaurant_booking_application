const express = require('express');
const app = express();
const router = require('./app/routes/router')
const cors = require('cors');
const sequelize = require('./app/utilsfunctions/dbConfig');



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api' , router);


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });


 sequelize.sync({force : false}).then(() => {
    console.log('tables created successfully!');
 }).catch((error) => {
    console.error('Unable to create tables : ', error);
 });
 

app.listen(8080 , ()=>{
    console.log('running on port 8080');
})