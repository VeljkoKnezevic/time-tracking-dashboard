import Jeremy from "../images/image-jeremy.png";

const Info = ({ setTimeframe }) => {
  const handleClick = (e) => {
    //Resets all colors
    let allElements = e.target.parentElement.children;
    const allElementsArr = [...allElements];
    allElementsArr.forEach((element) => {
      element.style.color = "#7078C9";
    });

    const value = e.target.value;
    setTimeframe(value);

    //Sets the clicked button to white
    e.target.style.color = "#ffffff";
  };

  return (
    <div className="info">
      <div className="info__content">
        <img src={Jeremy} alt="Jeremy" className="info__content__image" />
        <section className="info__name-and-report">
          <p className="info__content__report">Report for</p>
          <h1 className="info__content__name">Jeremy Robson</h1>
        </section>
      </div>
      <div className="info__selectors">
        <button
          value="daily"
          onClick={handleClick}
          className="info__selectors__selector"
        >
          Daily
        </button>{" "}
        <button
          onClick={handleClick}
          value="weekly"
          className="info__selectors__selector"
        >
          Weekly
        </button>{" "}
        <button
          value="monthly"
          onClick={handleClick}
          className="info__selectors__selector"
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default Info;
