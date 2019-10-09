export const createProject = project => {
  return (dispatch, getState) => {
    // here goes async staff
    setTimeout(() => {
      dispatch({
        type: "CREATE_PROJECT",
        project
      });
    }, 1000);
  };
};

// export const createProject = project => {
//   return {
//     type: "CREATE_PROJECT",
//     project
//   };
// };
