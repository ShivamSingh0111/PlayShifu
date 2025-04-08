import { useCart } from '../../context/CartContext';
import './Header.css';

const Header = () => {
  const { cart } = useCart();

  return (
    <>
      <div className="promo-banner text-center">
        <div className="promo-banner-content">
          <span>Never-before offers - Upto 25% OFF!</span>
        </div>
      </div>
      
      <header className="header-main py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2 d-flex d-md-none justify-content-start">
              <button className="btn">
                <i className="fas fa-search"></i>
              </button>
            </div>

            <div className="col-2 col-md-1">
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="countryDropdown">
                  <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India" width="30" />
                </button>
              </div>
            </div>

            <div className="col-8 col-md-8 text-center">
              <a href="/" className="navbar-brand">
                <img 
                  src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fbrand%2Fplayshifu-logo.webp&w=1080&q=75" 
                  alt="PlayShifu Logo" 
                  className="logo"
                />
              </a>
            </div>

            <div className="col-2 col-md-3 text-end">
              <button className="btn position-relative me-2">
                <i className="fas fa-shopping-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              </button>
              <button className="btn">
                <i className="fas fa-user-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;