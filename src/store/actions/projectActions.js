import { get } from "https";

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // here goes async staff

    const firestore = getFirestore();
    console.log("firestore getFirestore() ", firestore); // you can see there is add() method
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "JAN",
        authorLastName: "KOWALSKY",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project
        });
      })
      .catch(err => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          err
        });
      });
  };
};
