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

export default router;