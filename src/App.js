import "./App.css";
import BikeCreate from "./components/BikeCreate";
import { useEffect } from "react";
import BikeLists from "./components/BikeLists";
import useBikeContext from "./helper/useBikeContext";
// import BikesContext from "./context/Provider";

function App() {
  const { fetchBikes } = useBikeContext();
  // const { fetchBikes } = useContext(BikesContext);
  useEffect(() => {
    fetchBikes();
  }, [fetchBikes]);

  return (
    <div className="App">
      <BikeCreate />
      <BikeLists />
    </div>
  );
}

export default App;
