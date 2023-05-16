import { useState } from "react";
import useBikeContext from "../helper/useBikeContext";

const defaultFormField = {
  name: "",
  country: "",
};
const BikeCreate = () => {
  const { createBike } = useBikeContext();
  const [fields, setFields] = useState(defaultFormField);
  const { name, country } = fields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    createBike(fields);
    setFields(defaultFormField);
  };

  return (
    <div className="add">
      <form onSubmit={handleSubmit}>
        <div
          style={{
            justifyContent: "spaceBetween",
            width: "200px",
            display: "flex",
            marginBottom: "4px",
          }}
        >
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div
          style={{
            justifyContent: "spaceBetween",
            width: "200px",
            display: "flex",
            marginBottom: "4px",
          }}
        >
          <label htmlFor="country">country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button>add</button>
      </form>
    </div>
  );
};

export default BikeCreate;
