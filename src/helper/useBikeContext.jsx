import { useContext } from "react";

import BikesContext from "../context/BikesContext";

const useBikeContext = () => {
  return useContext(BikesContext);
};

export default useBikeContext;
