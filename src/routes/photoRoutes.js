import { Router } from "express";
import multer from "multer";

import PhotoController from "../controllers/PhotoController";
import multerConfig from "../config/multer";

const upload = multer(multerConfig);

const router = new Router();

router.post("/", upload.single("photo"), PhotoController.store);

export default router;
