import express from 'express';
import { login } from '../controllers/authe.js';
import { register } from '../controllers/authe.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);

export default router;