// export const fetchPeople = () => dispatch => {
//   fetch("https://www.anapioficeandfire.com/api/houses")
//     .then(res => res.json())
//     .then(people =>
//       dispatch({
//         type: "FETCH_PEOPLE",
//         payload: people
//       })
//     );
// };
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
//the-one-api.herokuapp.com/v1/book

// 4VMR-jnaJc-n_GHpNr_k

// addTodo = async title => {
//   axios.defaults.headers.post["auth-token"] = `${this.state.token}`;
//   // axios.defaults.headers.post["Content-Type"] = "application/json";

//   const res = await axios.post("http://localhost:5000/todos", {
//     title: title
//   });
//   try {
//     this.setState({ todos: [...this.state.todos, res.data] });
//   } catch (err) {
//     console.log(err);
//   }
// };
