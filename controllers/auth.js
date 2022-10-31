const User= require("../models/user");
const bcrypt=require("bcryptjs");
function register(req,res){
    const {firstname,lastname,email,password}=req.body;
    if(!email) res.status(400).send({ msg: "El email es obligatorio"});
    if(!password) res.status(400).send({ msg: "El Passeord es obligatorio"});

    const user= new User({
        firstname,
        lastname,
        email:email.toLowerCase(),
        role:"user",
        active:false,
   
    });
const salt= bcrypt.genSaltSync(10);
const hashPassword=bcrypt.hashSync(password,salt);
user.password=hashPassword;

    user.save((error,userStorage)=>{
if(error){
    res.status(400).send({msg: "Error al crear el usuario"});
}else{
    res.status(200).send(userStorage);
}
    })
    
}

module.exports={
    register,
};