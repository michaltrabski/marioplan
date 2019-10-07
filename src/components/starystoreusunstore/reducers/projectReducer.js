const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
  console.log("projectReducer", state, action);
  return state;
};

export default projectReducer;
