import { Express } from "express";

import {registerController} from "../controllers/authController.js"

const router  = express.Router();

// routing register || using POST

router.post('/register',registerController)

export default router;