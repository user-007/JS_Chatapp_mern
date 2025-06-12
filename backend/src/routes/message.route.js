import express from "express";
import {protectRoute} from "../middleware/auth.middleware.js";
import {getMessages, sendMessage} from "../controllers/message.controller.js";

const router = express.Router();
//adding endpoints, methods
//router.get("/user",protectRoute,getUsersForSidebar)
router.get("/:id",protectRoute,getMessages)
router.post("/:id",protectRoute,sendMessage)
router.get(":id",protectRoute,getMessages);
router.get("/:id",protectRoute,getMessages);

router.post("/send/:id",protectRoute, sendMessage)


