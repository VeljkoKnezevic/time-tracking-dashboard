import Ellipsis from "../images/icon-ellipsis.svg";
import dataSet from "../../data.json";
import { useEffect, useState } from "react";

const Card = ({ name, timeframe }) => {
  const [colorClass, setColorClass] = useState("");

  const colorSetting = () => {
    switch (name) {
      case "Work":
        setColorClass(name);
        break;
      case "Play":
        setColorClass(name);
        break;
      case "Study":
        setColorClass(name);
        break;
      case "Exercise":
        setColorClass(name);
        break;
      case "Social":
        setColorClass(name);
        break;
      default:
        setColorClass("self-care");
    }
  };

  useEffect(() => {
    colorSetting();
  }, []);

  return (
    <div className={`card ${colorClass}`}>
      <section className="card__content">
        <div className="card__container">
          <h2 className="card__container__heading">{name}</h2>
          <img src={Ellipsis} alt="" className="card__container__dots" />
        </div>
        <div className="card__hours">
          <p className="card__hours__current">
            {dataSet.map((data) => {
              if (data.title === name) {
                return data.timeframes[timeframe].current;
              }
            })}
            hrs
          </p>
          <p className="card__hours__previous">
            Last week -{" "}
            {dataSet.map((data) => {
              if (data.title === name) {
                return data.timeframes[timeframe].previous;
              }
            })}{" "}
            hrs
          </p>
        </div>
      </section>
    </div>
  );
};

export default Card;
