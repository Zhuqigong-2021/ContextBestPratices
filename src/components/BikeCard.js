import React from "react";
import { useState } from "react";
import BikeInfo from "./BikeInfo";
import useBikeContext from "../helper/useBikeContext";

const BikeCard = ({ bike }) => {
  const [toggle, setToggle] = useState(false);
  const { deleteBikeById } = useBikeContext();
  const handleDelete = () => {
    deleteBikeById(bike.id);
  };
  const handleEdit = () => {
    setToggle(!toggle);
  };
  let content = "";
  if (toggle) {
    content = <BikeInfo bike={bike} setToggle={setToggle} />;
  }
  return (
    <div className="card">
      <img alt="books" src={`https://picsum.photos/seed/${bike.id}/300/300`} />
      <div>name: {bike.name}</div>
      <div className="content">{content}</div>

      <div>country: {bike.country}</div>

      <div className="edit">
        <div className="update" onClick={handleEdit}>
          o
        </div>
        <div className="delete" onClick={handleDelete}>
          x
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
