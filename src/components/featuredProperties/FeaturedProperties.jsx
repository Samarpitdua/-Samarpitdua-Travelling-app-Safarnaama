import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src={require('./imag/lakshadweep.jpg')}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Lakshadweep</span>
        <span className="fpCity">India</span>
        <span className="fpPrice">Starting from Rs. 30000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={require('./amritsar.avif')}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Golden Temple</span>
        <span className="fpCity">Amritsar</span>
        <span className="fpPrice">Starting from Rs 5000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from Rs 8000</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={require('./shimla.jpg')}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Shimla</span>
        <span className="fpPrice">Starting from Rs 4400</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;