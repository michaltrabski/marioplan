const initState = {};

const authReducer = (state = initState, action) => {
  console.log("authReducer", state, action);
  return state;
};

export default authReducer;
