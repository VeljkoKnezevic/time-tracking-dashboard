import Ellipsis from "../images/icon-ellipsis.svg";
import dataSet from "../../data.json";

const Card = ({ name }) => {
  return (
    <section className="card">
      <section className="card__content">
        <div className="card__container">
          <h2 className="card__container__heading">{name}</h2>
          <img src={Ellipsis} alt="" className="card__container__dots" />
        </div>
        <div className="card__hours">
          <p className="card__hours__current">
            {dataSet.map((data) => {
              if (data.title === name) {
                return data.timeframes.weekly.current;
              }
            })}
            hrs
          </p>
          <p className="card__hours__previous">
            Last week -{" "}
            {dataSet.map((data) => {
              if (data.title === name) {
                return data.timeframes.weekly.previous;
              }
            })}{" "}
            hrs
          </p>
        </div>
      </section>
    </section>
  );
};

export default Card;
