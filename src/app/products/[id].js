// pages/api/products/[id].js

export default function handler(req, res) {
    const { id } = req.query;
  
    const productData = fetchProductDataById(id);
  
    if (!productData) {
      return res.status(404).json({ error: 'Product not found' });
    }
  
    res.status(200).json(productData);
  }
  