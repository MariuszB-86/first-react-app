// actions
const createActionName = actionName => `app/searchString/${actionName}`;

const SEARCH_STRING = createActionName('SEARCH_STRING');

// action creators
export const searchString = payload => ({type: SEARCH_STRING, payload});

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case SEARCH_STRING:
        return action.payload
      default:
        return statePart;
    }
  };

  export default searchStringReducer;