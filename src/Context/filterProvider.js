import { useContext, createContext, useReducer} from "react";
import { Compose, filterSearchBy } from "../utils/filter";
import { filterReducer } from "../reducer/filterReducer";
import { useVehicle } from "./vehicleProvider";
  
  const FilterContext = createContext();
  const useFilter = () => useContext(FilterContext);
  
  const FilterProvider = ({ children }) => {
    
    const { vehicleState } = useVehicle();
  
    const [filterState, filterDispatch] = useReducer(filterReducer, {
      searchBy: " "
    });
    const filteredVehicles = Compose(
      filterState,
      filterSearchBy
    )(vehicleState);
  
    return (
      <FilterContext.Provider
        value={{ vehicleList: filteredVehicles, filterState, filterDispatch }}
      >
        {children}
      </FilterContext.Provider>
    );
  };
  
  export { FilterProvider, useFilter };