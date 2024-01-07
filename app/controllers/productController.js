const Product = require('../models/productsModel');

async function PostProducts(req , res) {
    const { name , description , image , price , liked , active } = req.body;

    const product = await Product.create({name , description , image , price , liked , active});
    if(product){
        res.status(201).json({msg : ' product created successfully' , product});
    }else{
        res.status(400).json({msg : ' error occured'});
    }

}

async function GetProductList(req , res) {
    const { adminId } = req.body;

    const productList = await Product.findAll();

    if(adminId){
        res.status(200).json({msg: 'Product list fetched successfully' , productList})
    }else{
        res.status(200).json({msg: 'Product list fetched successfully' , productList})
    }
}




module.exports = { PostProducts  , GetProductList }