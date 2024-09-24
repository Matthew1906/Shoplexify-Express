import express from "express";
import multer from "multer";
import auth from "@/middlewares/auth";
import { createEditReview, getReviews } from "@/controllers/reviews";

const formDataHandler = multer();
const router = express.Router();

router.get('/:slug', auth, getReviews);
router.post('/', auth, formDataHandler.none(), createEditReview);

export default router;