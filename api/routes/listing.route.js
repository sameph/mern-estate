import express from 'express';
import { createListings, deleteListing } from '../controller/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListings);
router.delete('/delete/:id', verifyToken, deleteListing);

export default router;