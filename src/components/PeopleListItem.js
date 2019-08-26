import React, { useEffect } from "react";
import "./people.css";

//Redux
import { useDispatch } from "react-redux";
import { fetchPerson } from "../redux/actions/index";
import { useSelector } from "react-redux";

function PeopleListItem({ match }) {
  const person = useSelector(state => state.fetch.person.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPerson(match.params.id));
    console.log(match);
    console.log(person);
  }, []);
  return (
    <React.Fragment>
      <div className="person-card-container">
        <div className="person-card">
          {person ? (
            <li key={person._id}>
              <h1>{person.name}</h1>
              <h3>Gender: {person.gender}</h3>
              <h3>{person.height && <h3>Height: {person.height}</h3>}</h3>
              <h3>Race: {person.race}</h3>
              {person.realm && <h3>Realm: {person.realm}</h3>}
              <h3>
                {!person.birth ? (
                  <h3>Born: unknown</h3>
                ) : (
                  <h3>Born: {person.birth}</h3>
                )}
              </h3>
              <h3>{person.death && <h3>Died: {person.death}</h3>}</h3>
              <h3 className="people-links-h3">
                {person.wikiUrl && (
                  <a className="people-links" href={`${person.wikiUrl}`}>
                    More Infos
                  </a>
                )}
              </h3>
            </li>
          ) : (
            <h1>Waiting...</h1>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
export default PeopleListItem;
