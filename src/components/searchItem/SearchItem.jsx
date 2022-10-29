import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src={require('./images/patnitop.jpg')}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Patni Top</h1>
        <span className="siDistance">5km from Bus stop</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Have a great insight of Nature!
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;