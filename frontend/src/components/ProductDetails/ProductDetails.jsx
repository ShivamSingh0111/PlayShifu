import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { getProducts } from '../../services/api';
import './ProductDetails.css';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setSelectedProduct(data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!selectedProduct) return <div>No product found</div>;

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 mb-4">
          <ProductImages product={selectedProduct} />
        </div>
        <div className="col-md-6">
          <ProductInfo 
            product={selectedProduct} 
            onAddToCart={() => addToCart(selectedProduct)} 
          />
        </div>
      </div>
      
      <RelatedProducts 
        products={products} 
        currentProduct={selectedProduct}
        onSelectProduct={setSelectedProduct}
      />
    </div>
  );
};

const ProductImages = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [product.image]; // Add more images if available

  return (
    <div className="product-images">
      <div className="main-image">
        <img src={images[selectedImage]} alt={product.name} className="img-fluid" />
      </div>
      <div className="thumbnail-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.name} thumbnail ${index + 1}`}
            className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

const ProductInfo = ({ product, onAddToCart }) => {
  return (
    <div className="product-info">
      <h1>{product.name}</h1>
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
      </div>
      <div className="price">
        <span className="current-price">₹{product.price}</span>
        <span className="original-price">₹{Math.round(product.price * 1.25)}</span>
      </div>
      <p className="description">{product.description}</p>
      <button className="add-to-cart-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

const RelatedProducts = ({ products, currentProduct, onSelectProduct }) => {
  const relatedProducts = products.filter(p => p._id !== currentProduct._id);

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="row">
        {relatedProducts.map(product => (
          <div key={product._id} className="col-md-4">
            <div className="related-product-card" onClick={() => onSelectProduct(product)}>
              <img src={product.image} alt={product.name} className="img-fluid" />
              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;