import routerS from 'express'
import {check,validationResult} from 'express-validator'

import users  from '../db.js'

const router = routerS.Router()


router.post('/signup',[
   check('email','Please include a valid email').isEmail(),
   check('password', "Please enter a password with 6 or more characters").isLength({
      min: 6
   })
], (req, res) => {

   // Get something form req.body

   const {email,password} = req.body;
   const error = validationResult(req);

   if (!error.isEmpty()) {
      return res.status(400).json({
         error: error.array()
      })
   }

   // database

   const user = users.find((user) => user.email === email);

   if (user) {
      return res.status(400).json({
         "msg": "User already exists"
      })
   }

   res.send('user created');


  
})

export default router