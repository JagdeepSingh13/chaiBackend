import {Router} from "express";
import {registerUser} from "../controllers/user.controller.js";

const router = Router();

// http://localhost:4000/api/v1/users/register
router.route("/register").post(registerUser)

export default router;