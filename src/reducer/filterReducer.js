export function filterReducer(filterState, action) {
    switch (action.type) {
      case "SEARCH":
        return { ...filterState, search: action.payload };
  
      default:
        return filterState;
    }
  }