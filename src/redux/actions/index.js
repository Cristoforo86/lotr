import axios from "axios";

export const fetchPeople = race => dispatch => {
  axios.defaults.headers.get["Authorization"] = "Bearer 4VMR-jnaJc-n_GHpNr_k";
  axios
    .get(`https://the-one-api.herokuapp.com/v1/character?race=${race}`)

    .then(people =>
      dispatch({
        type: "FETCH_PEOPLE",
        payload: people
      })
    )
    .catch(err => console.log(err));
};

export const fetchPerson = id => dispatch => {
  axios.defaults.headers.get["Authorization"] = "Bearer 4VMR-jnaJc-n_GHpNr_k";
  axios
    .get(`https://the-one-api.herokuapp.com/v1/character/${id}`)

    .then(person =>
      dispatch({
        type: "FETCH_PERSON",
        payload: person
      })
    )
    .catch(err => console.log(err));
};

export const setSearchField = searchField => dispatch => {
  dispatch({
    type: "CHANGE_SEARCHFIELD",
    payload: searchField
  });
};
