import express from 'express';
import { index , about } from './../controllers/HomeController.js';

let router = express.Router();

router.get('/' , index);
router.get('/acerca' , about);

export default router;
