import express from 'express';
import locationController from '../controllers/location.controller.js';

const router = express.Router();

// GET all
router.get('/', locationController.getLocation);

// POST create
router.post('/create', locationController.createLocation);

// DELETE one by id
router.delete('/delete/:id', locationController.deleteLocationById);

// DELETE all
router.delete('/delete', locationController.deleteAllLocations);

export default router;
