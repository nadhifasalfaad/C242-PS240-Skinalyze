const products = require('../data/products.json');

// Handler untuk mendapatkan semua produk
exports.getProducts = (req, res) => {
    res.status(200).json({
        success: true,
        data: products,
    });
};

// Handler untuk mendapatkan produk berdasarkan query pencarian
exports.searchProducts = (req, res) => {
    const query = req.query.search?.toLowerCase();

    if (!query) {
        return res.status(400).json({
            success: false,
            message: 'Search query is required.',
        });
    }

    const filteredProducts = products.filter(
        (product) =>
            product.title.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
    );

    if (filteredProducts.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'No products found matching the query.',
        });
    }

    res.status(200).json({
        success: true,
        data: filteredProducts,
    });
};
