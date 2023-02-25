import Jeremy from "../images/image-jeremy.png";

const Info = () => {
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
        <button className="info__selectors__selector">Daily</button>{" "}
        <button className="info__selectors__selector">Weekly</button>{" "}
        <button className="info__selectors__selector">Monthly</button>
      </div>
    </div>
  );
};

export default Info;
