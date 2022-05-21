import { carsFromDB } from "../models/server";

function Car({ id, name, des, img }) {
  return (
    <>
      <div
        className="card"
        style={{
          width: "25vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        id={id && id}
      >
        <div className="card-image">
          <img className="activator" src={img && img} alt={name && name} />
          <span className="card-title">{name && name}</span>
        </div>
        <div className="card-content">
          <p>{des && des}</p>
        </div>
        <div className="card-action flex-row__JC-SA"></div>
      </div>
    </>
  );
}

export default Car;
