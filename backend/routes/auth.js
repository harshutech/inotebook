const express = require('express')
const User = require('../modules/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchuser = require ('../middleware/fetchuser');


const JWT_SECRET = 'Harryisagoodb$oy';


//ROUTE 1:  create a user using post "/api/auth/createuser"   no login required
router.post('/createuser',[
   body('name','Enter a valid name').isLength({ min: 3 }),
   body('email','Enter a valid mail').isEmail(),
   body('password','password must be atleast 6 characters').isLength(),
],async (req,res)=>{
  let success = false
   // if there are errors return bad request
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({success, errors: errors.array() });
   }
try{
   // check wheather the user with this email already exists
   let user = await User.findOne({email:req.body.email});
   console.log(user);
   if(user){
      return res.status(404).json ({success, error:"ohh..User with this email already exists"})
   }
   const salt =await bcrypt.genSalt(10);
   const secPass = await bcrypt.hash( req.body.password, salt);

   // create user
   user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    })
    const data = {
      user:{
         id:user.id
      }
      
    }
    const authtoken =  jwt.sign(data, JWT_SECRET);
    success = true;

   //  .then(user => res.json(user)).catch(err=>res.json({error:"please enter a unique value for mail", message:err.message}))
   //  res.json(user);
   res.json({success, authtoken})
   }
   catch(error){
   console.log(error.message);
   res.status(500).send('internal Error ');
}
})




//ROUTE 2: authentic  a user using post "/api/auth/login" , no login required

router.post('/login', [ 
   body('email', 'Enter a valid email').isEmail(), 
   body('password', 'Password cannot be blank').exists(),
 ], async (req, res) => {
  let success = false
 
   // If there are errors, return Bad request and the errors
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
 
   const {email, password} = req.body;
   try {
     let user = await User.findOne({email});
     if(!user){
       return res.status(400).json({error: "Please try to login with correct credentials"});
     }
 
     const passwordCompare = await bcrypt.compare(password, user.password);
     if(!passwordCompare){
      success = false;
       return res.status(400).json({ success ,error: "Please try to login with correct credentials"});
     }
 
     const data = {
       user:{
         id: user.id
       }
     }
     const authtoken = jwt.sign(data, JWT_SECRET);
     success = true;
     res.json({success, authtoken})
 
   } catch (error) {
     console.error(error.message);
     res.status(500).send("Internal Server Error");
   }
 
 
 })



//ROUTE 3:get loggdin user details  using post "/api/auth/getuser" , no login required
router.post('/getuser', fetchuser,  async (req, res) => {

  try {
   const userId = req.user.id;
    const user = await User.findById(userId).select("-password") // this (.select("-password") does not allow to show password);
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router;