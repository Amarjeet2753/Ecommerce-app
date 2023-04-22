  
  import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import userModel from '../models/userModel.js'
import JWT from 'jsonwebtoken'

export  const registerController = async(req,res)=>{
   
    try{
      
        const {name,email,password,phone,address,answer} = req.body;

        if(!name){
            return res.send({msg : "name is required"})
        }
        if(!email){
            return res.send({msg : "email is required"})
        }
        if(!password){
            return res.send({msg : "password is required"})
        }
        if(!phone){
            return res.send({ msg : "phone is required"})
        }
        if(!address){
            return res.send({msg : "address is required"})
        }
        if(!answer){
            return res.send({msg : "answer is required"})
        }

        // check user if already exist ----

        const userExisting = await userModel.findOne({email});

        if(userExisting){
            res.status(200).send({
                success :false,
                msg : "Already registered please login"
            })
        }

        // Register user --
        // hash password
        const hashedPassword = await hashPassword(password);
        // save data-
        const user  = await new userModel({name,email,phone,address,password : hashedPassword,answer}).save();
       
        res.status(201).send({
            success :true,
            msg : "user registered successfully",
            user,
        })

    }catch(err){
        console.log("register controller : ",err);

        res.ststus(500).send({
            success : false,
            msg : "error in registeration",
            err
        })
    }
}


// Post for login

export const loginController = async (req,res) =>{
     try{

        const {email,password} =req.body;
        
        // validation 

        if(!email || !password){
            res.status(404).send({
                success : false,
                msg :"invalid email or password"

            })
        }

        // compare password
        const user = await userModel.findOne({email});
        if(!user){
            res.status(404).send({
                success : false,
                msg :"user not registered"

            })
        }

        const match = await comparePassword(password,user.password);

        
        if(!match){
            res.status(200).send({
                success : false,
                msg :"Invalid password"

            })
        }

        // jwt token creation

        const token = await JWT.sign({_id : user._id}, process.env.JWT_SECRET,{expiresIn :'7d'});

        res.status(200).send({
            success : true,
            msg : "user login successfully",
            user : {
                name : user.name,
                email : user.email,
                phone : user.phone,
                address : user.address,
                role : user.role,
            },
            token,
        });

     }catch(err){
        console.log("login controller : ",err);

        res.status(500).send({
            success : false,
            msg : "error in login",
            err
        })
     }
}

// forgotPasswordController ----

export const forgotPasswordController = async (req,res)=>{
   
    try{
       
        const {email,answer,newPassword} = req.body;

        if(!email){
            res.status(400).send({msg : "email is required"})
        }
        if(!answer){
            res.status(400).send({msg : "answer is required"})
        }
        if(!newPassword){
            res.status(400).send({msg : "newpassword is required"})
        }
        // check email and answer

        const user = await userModel.findOne({email,answer});

        // validate user

        if(!user){
            return res.status(404).send({
                success: false,
                msg: "wrong email or answer",
            })
        }

        const hashed= await hashPassword(newPassword);
        await userModel.findOneAndUpdate(user._id,{password : hashed});

        res.status(200).send({
            success: true,
            msg: "Password reset successfully !",
        })

    }catch(error){
        console.log(error);
    res.status(500).send({
      success: false,
      msg: "Something went wrong",
      error,
    });
    }
}


// test contoller

export const testContoller = (req,res)=>{
   console.log("Protected test route");
   res.send("Protected test route")
}

