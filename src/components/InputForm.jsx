import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carsFromDB } from "../models/server";
import { getCars } from "../redux/actions/carActions";
import Car from "./Car";

function InputForm() {
  const [input, setInput] = useState("");
  const inputHandler = (e) => setInput(e.target.value);
  const dispatch = useDispatch();
  const allCars = useSelector((state) => state.cars);
  const [filterCars, setFilterCars] = useState([]);

  const buttonHandler = () => {
    
    setFilterCars((prev) => prev.filter(e => e.id === +input))
    
  };

  useEffect(() => {
    setFilterCars(allCars)
  }, [allCars])

  useEffect(() => {
    setFilterCars(allCars)
  }, [input])

  useEffect(() => {  //отрисовка всех машин из бд
    dispatch(getCars(carsFromDB));
  }, [])

  return (
    <>
      <div className="content" style={{ margin: "0 0 0 550px" }}>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="input car id (1 - 8)"
              type="text"
              className="validate"
              value={input}
              onChange={inputHandler}
            />
            <button
              className="btn search-btn indigo accent-1"
              onClick={buttonHandler}
            >
              Search
            </button>
          </div>
        </div>
        <div style={{ margin: "0 0 0 90px" }}>
          <div>
            {filterCars && filterCars.map((car) => (
              <Car id={car.id} name={car.name} des={car.des} img={car.img} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InputForm;
