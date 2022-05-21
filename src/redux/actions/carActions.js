export const getCars = (allCars) => {
  return {
    type: 'ADD_CAR',
    payload: allCars,
  };
};

