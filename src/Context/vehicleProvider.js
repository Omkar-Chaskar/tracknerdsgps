import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { vehicleReducer } from "../reducer/vehicleReducer";

const VehicleContext = createContext();

const useVehicle = () => useContext(VehicleContext);

const VehicleProvider = ({ children }) => {
  const [vehicleState, vehicleDispatch] = useReducer(vehicleReducer, []);

  useEffect(() => {
    const getVehicles = async () => {
        try {
          const {data} = await axios({
            method: "get",
            url: "https://staging-api.tracknerd.io/v1/vehicle-groups/vehicles",
            headers: { "Authorization":`Bearer ${JSON.parse(localStorage.getItem("auth_token"))}` }
          });
          
          vehicleDispatch({ type: "GET_VEHICLES", payload: data.data[0].vehicles });
        } catch (err) {
          alert("Something went wrong: Loading Vehicles Failed");
          console.error(err);
        }
      };

      getVehicles();

     }, [vehicleDispatch]);

  return (
    <VehicleContext.Provider
      value={{vehicleState, vehicleDispatch}}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export { VehicleProvider, useVehicle };