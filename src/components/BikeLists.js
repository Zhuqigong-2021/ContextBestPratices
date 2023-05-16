import React from "react";
import BikeCard from "./BikeCard";
import useBikeContext from "../helper/useBikeContext";

const BikeLists = () => {
  const { bikes } = useBikeContext();
  const content = bikes.map((bike) => <BikeCard bike={bike} key={bike.id} />);
  return <div className="bikes">{content}</div>;
};

export default BikeLists;
