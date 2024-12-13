const express = require('express');
const router = express.Router();
const { getProducts, searchProducts } = require('../controllers/productController');

// Route untuk mendapatkan semua produk
router.get('/', getProducts);

// Route untuk pencarian produk berdasarkan query
router.get('/search', searchProducts);

module.exports = router;
