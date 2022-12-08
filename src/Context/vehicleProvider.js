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
            headers: { "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZXdhbi50aGFwYTlAZ21haWwuY29tIiwic3ViIjoxMDMsInBob25lIjoiOTgzMjM3Njk0MyIsImlhdCI6MTY3MDQ4NTE2M30.xsr2ucEd76WPCsndjA9Uy1VfRN8NvF_SKnqq2tiI7E4" }
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