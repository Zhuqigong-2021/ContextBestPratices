import { createContext, useState, useCallback } from "react";
import axios from "axios";
const BikesContext = createContext();

export const BikesProvider = ({ children }) => {
  const [bikes, setBikes] = useState([]);

  const fetchBikes = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/bikes");

    setBikes(response.data);
  }, []);
  const createBike = async (fields) => {
    const response = await axios.post("http://localhost:3001/bikes", {
      ...fields,
    });

    const updatedBooks = [...bikes, response.data];
    setBikes(updatedBooks);
  };

  const deleteBikeById = async (id) => {
    await axios.delete(`http://localhost:3001/bikes/${id}`);

    const updatedBikes = bikes.filter((bike) => {
      return bike.id !== id;
    });

    setBikes(updatedBikes);
  };

  const editBikeById = async (id, bikeObj) => {
    const response = await axios.put(`http://localhost:3001/bikes/${id}`, {
      ...bikeObj,
    });

    const updatedBikes = bikes.map((bike) => {
      if (bike.id === id) {
        return { ...bike, ...response.data };
      }
      return bike;
    });

    setBikes(updatedBikes);
  };
  const value = { bikes, createBike, deleteBikeById, editBikeById, fetchBikes };

  return (
    <BikesContext.Provider value={value}>{children}</BikesContext.Provider>
  );
};

export default BikesContext;
