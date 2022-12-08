const Compose = (filterState, ...functions) => (vehicleState) =>
  functions.reduce((acc, cur) => cur(filterState, acc), vehicleState);

const filterSearchBy = (filterState, vehicleState) => {
    return vehicleState.filter(item => item.registrationNumber.toLowerCase().includes(filterState.search))
  };

export { Compose, filterSearchBy};