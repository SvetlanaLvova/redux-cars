const carReducer = (state=[], action) => {
const {type, payload} = action;
switch (type) {
  case 'ADD_CAR':   // что делать
    return payload; // состояние
    default:
      return state;
}
}

export default carReducer;
