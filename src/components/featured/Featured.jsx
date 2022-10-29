import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={require('./images/kashmir.avif')}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kashmir</h1>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src={require('./images/mumbai.avif')}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
       src={require('./images/delhi.jpg')}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Delhi</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;