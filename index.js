

let express = require('express');
let bcrypt = require('bcrypt');
let mongoose = require('mongoose')
let app = express();
let jsonwebtoken = require('jsonwebtoken');

const cors = require('cors')
app.use(cors())

app.use(express.json());

let User =require('./modal/user.js');
// connect to the database 

mongoose.connect('mongodb://127.0.0.1:27017/Login').then(()=>{
    console.log("data base connection established")
}).catch((err)=>{
    console.log(err);
})


app.post('/',async(req,res)=>{
    
    
    let{email,username,password} = req.body;
    let userData =req.body
    let dbData = await User.findOne({email})
    console.log(dbData +"hysysysysysy");
    if(dbData){
        res.send("this email is already in use")
    }
    else{
        let updatedPass = await bcrypt.hash(userData.password,10);
        let newUser =new User({
            email: userData.email,
            username: userData.username,
            password: updatedPass
        });
        newUser.save();
        return res.send("acc created successfully");
    }

})

// login Api 
    app.post('/login',async(req,res)=>{
        let{email,password} =req.body;
        console.log(req.body)

        let dbData = await User.findOne({email})
        console.log(dbData+" " + "heehehhehheh");
        if(dbData){
            let isMatch =await bcrypt.compare(password, dbData.password);
            console.log(isMatch);
            if(isMatch ){
                // genrate tocken     

                let tocken = await jsonwebtoken.sign({email:dbData.email},"ASFJDLSJFS")
                console.log(tocken);
                console.log("login successful");
                res.send("log in successfull")
               
            }
            else{
                console.log("wrong pss");
                res.send("wrong password")
            }
        }
        else{
            console.log("no account on this email address");
            res.send("first crate an account")
        }
    })

app.listen(5000,()=>{
    console.log('Server running on port no 5000');
})