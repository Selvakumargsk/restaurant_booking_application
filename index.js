const express = require('express');
const app = express();
const router = require('./app/routes/router')
const cors = require('cors');
const sequelize = require('./app/utilsfunctions/dbConfig');
const Product = require('./app/models/productsModel');



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api' , router);
app.use('/uploads', express.static('uploads'));


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });


//  const MenuList = [
//    {
//      name: "Dosa",
//      description:
//        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
//      image: `http://localhost:8080/uploads/images/dosa.jpg`,
//      active : true,
//      price: 200,
//    },
//    {
//      name: "Chola",
//      description:
//        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
//      image: `http://localhost:8080/uploads/images/chhola.jpg`,
//      active : true,
//      price: 250,
//    },
//    {
//      name: "Idli Sambhar",
//      description:
//        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
//      image: `http://localhost:8080/uploads/images/idli.jpg`,
//      active : true,
//      price: 300,
//    },
//    {
//      name: "Masala Dosa",
//      description:
//        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
//      image: `http://localhost:8080/uploads/images/masala.jpg`,
//      active : true,
//      price: 100,
//    },
//    {
//      name: "Paneer",
//      description:
//        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
//      image: `http://localhost:8080/uploads/images/paneer.jpg`,
//      active : true,
//      price: 400,
//    },
//    {
//      name: "Gujrati",
//      description:
//        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
//      image: `http://localhost:8080/uploads/images/gujrati.jpeg`,
//      active : true,
//      price: 500,
//    },
//  ]

// Product.bulkCreate(MenuList)
//  .then(() => {
//    console.log('Products added successfully.');
//  })
//  .catch((error) => {
//    console.error('Error adding products:', error);
//  });


 sequelize.sync({force : false}).then(() => {
    console.log('tables created successfully!');
 }).catch((error) => {
    console.error('Unable to create tables : ', error);
 });
 

app.listen(8080 , ()=>{
    console.log('running on port 8080');
})