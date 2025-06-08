import express from "express";
import {protectRoute} from "../middleware/auth.middleware.js";
import {getUsersForSideBar} from "./controllers/users.controller.js";

const router = express.Router();
//adding endpoints, methods
router.get("/user",protectRoute,getUsersForSidebar)
router.get("/:id",protectRoute,getMessages)
export default router;
