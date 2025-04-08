import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-menu">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <div className="dropdown">
              <button className="btn dropdown-toggle">
                Shop By Category
              </button>
            </div>
          </div>
          <div className="col">
            <div className="dropdown">
              <button className="btn dropdown-toggle">
                Shop By Age
              </button>
            </div>
          </div>
          <div className="col">
            <a href="#" className="btn">Super Saver Deals</a>
          </div>
          <div className="col">
            <a href="#" className="btn">Birthday Gifts</a>
          </div>
          <div className="col">
            <a href="#" className="btn">Shop All</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;