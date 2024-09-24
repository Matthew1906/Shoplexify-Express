import { getTransaction, getTransactions, updateTransactionStatus } from "@/controllers/transactions";
import { admin, auth } from "@/middlewares";
import express from "express";

const router = express.Router();

router.get("/", auth, getTransactions);
router.get("/:id", auth, getTransaction);
router.patch("/:id", auth, admin, updateTransactionStatus)

export default router;