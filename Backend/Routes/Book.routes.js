import express from 'express';
import {addBook, getBooks, updateBook, deleteBook} from '../Controller/Book.controller.js';
const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;