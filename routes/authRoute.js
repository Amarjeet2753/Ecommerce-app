import  express  from 'express';

import {registerController,loginController,testContoller} from "../controllers/authController.js"

import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router  = express.Router();

// routing register || using POST

router.post('/register',registerController)

// login || Post
router.post('/login',loginController)

// dummy for test

router.get('/test',requireSignIn,isAdmin,testContoller)


//protected User route auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });
  //protected Admin route auth
//   router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
//     res.status(200).send({ ok: true });
//   });



export default router;


