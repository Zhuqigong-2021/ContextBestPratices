import React from "react";
import { useState } from "react";
import useBikeContext from "../helper/useBikeContext";

// const defaultField = {
//   name: "",
//   country: "",
// };
const BikeInfo = ({ bike, setToggle }) => {
  const [bikeObj, setBikeObj] = useState(bike);
  const { editBikeById } = useBikeContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBikeObj({ ...bike, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editBikeById(bike.id, bikeObj);
    setToggle(false);
  };
  return (
    <form onSubmit={handleSubmit} className="bikeEdit">
      name:{" "}
      <input
        type="text"
        name="name"
        value={bikeObj.name}
        onChange={(e) => handleChange(e)}
      />
      country:{" "}
      <input
        type="text"
        name="country"
        value={bikeObj.country}
        onChange={(e) => handleChange(e)}
      />
      <button>save</button>
    </form>
  );
};

export default BikeInfo;
