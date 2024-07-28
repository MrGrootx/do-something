import routerS from 'express'
import {check,validationResult} from 'express-validator'

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

   res.send('user created');


  
})

export default router