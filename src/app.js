//require(include ) 
const express=require("express");
const app =express();  //transfer express power
const hbs=require('hbs');
const path=require("path");
require("./db/conn");
const Register = require("./models/registers");

//port
const port=process.env.PORT || 3000;

//path
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

//use path
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path));

//set path
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

//get files(read files,show files)
app.get("/",(req,res)=>{
    res.render("index");
});
//create a new user in your database
app.post("/",async(req,res)=>{
   try {
    // console.log(req.body.name);
    // res.send(req.body.name)
    const registerEmployee = new Register({
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
        massage:req.body.massage
    })
    const registered= await registerEmployee.save();
    res.status(201).send(`YOUR FORM IS SUBMITED  <Strong style="color:green;"><em>${req.body.name}</em></Strong>`);
    
   } catch (error) {
    res.status(400).send(" I THINK YOU ARE NOT FILL <Strong style='color:red;'>EMAIL</Strong> OR <Strong style='color:red;'>NUMBER</Strong>.");
   }
});

//listen server
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})