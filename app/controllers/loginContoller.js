const Admin = require("../models/adminModel");
const RegistrationDetails = require("../models/registrationModel");
const { generateSessionToken } = require("../utilsfunctions/sessionProvider");

async function Login(req , res) {
   try{
        const {email , password} = req.body;
        if(email == 'admin' && password == 'admin'){
            const isexist = await Admin.findOne({where : {username : email}});
            let admin;
            if(!isexist){
                 admin = await Admin.create({
                    username : email ,
                    password
                })
            }else{
                await Admin.update({username : email , password} , {where : {id : isexist.id}});
                admin = await Admin.findOne({where : {
                    id : isexist.id
                }})
       
            }
            const token = generateSessionToken(admin);
            res.status(201).json({msg :'admin session created ' , role : 'admin' , admin  , token})
        }else{
            let user;
            user = await RegistrationDetails.findOne({where : {email , password}});
            if(!user){
                res.status(400).json({msg : 'email or password is not valid . Please try again'});
            }else{
                const token = generateSessionToken(user);
                res.status(201).json({msg :'user session created ' , role : 'user' , user  , token})
            }
        }

    }catch(err){
        console.log('error occured :' , err);
    }
}

module.exports = { Login }