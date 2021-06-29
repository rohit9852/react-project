import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
} from "../actions/types";

const initialState = [];

function tutorialReducer(tutorials = initialState, action) {
  console.log('ac', action)
  // debugger
  const { type, payload } = action;

  switch (type) {
    case CREATE_TUTORIAL:
      return [...tutorials, payload];

    case RETRIEVE_TUTORIALS:
      return payload;

    case UPDATE_TUTORIAL:
      return tutorials.map((tutorial) => {
        if (tutorial.id === payload.id) {
          return {
            ...tutorial,
            ...payload,
          };
        } else {
          return tutorial;
        }
      });

    default:
      return tutorials;
  }
};

export default tutorialReducer;