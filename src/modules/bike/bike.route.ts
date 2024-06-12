import express from 'express';

const router = express.Router();

// route for add bike into db
router.post('/bikes');

export const BikeRoutes = router;
