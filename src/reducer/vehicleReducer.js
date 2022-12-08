export function vehicleReducer(vehicleState, action) {
    switch (action.type) {
      case "GET_VEHICLES":
        return [...action.payload];

        case "SEARCH":
          return { ...vehicleState, search: action.payload };
  
      default:
        return vehicleState;
    }
  }