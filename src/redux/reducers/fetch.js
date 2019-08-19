const initialState = {
  people: [],
  person: {}
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PEOPLE":
      return {
        ...state,
        people: action.payload.data.docs
      };
    case "FETCH_PERSON":
      return {
        ...state,
        person: action.payload
      };
    default:
      return state;
  }
};
export default fetchReducer;
