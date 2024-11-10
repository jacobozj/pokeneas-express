// routes/pokeneaRoutes.js
const express = require('express');
const router = express.Router();
const { getRandomPokenea, getPokeneaImageAndPhilosophy } = require('../controllers/pokeneaController');
const { home } = require('../controllers/homeController');

router.get('/api/random', getRandomPokenea);
router.get('/api/image', getPokeneaImageAndPhilosophy);
router.get('/',home);

module.exports = router;
