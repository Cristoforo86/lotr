import React from "react";
import "./people.css";

import { Link } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";
import { fetchPeople } from "../redux/actions/index";
import { useSelector } from "react-redux";

function People() {
  const peoples = useSelector(state => state.fetch);

  const dispatch = useDispatch();

  console.log("1", peoples);
  return (
    <React.Fragment>
      <div>
        <div>
          <ul className="people-header">
            <Link
              className="people-links"
              onClick={() => dispatch(fetchPeople("Human"))}
            >
              Humans
            </Link>
            <Link
              className="people-links"
              onClick={() => dispatch(fetchPeople("Hobbit"))}
            >
              Hobbits
            </Link>
            <Link
              className="people-links"
              onClick={() => dispatch(fetchPeople("Dwarf"))}
            >
              Dwarfs
            </Link>
            <Link
              className="people-links"
              onClick={() => dispatch(fetchPeople("Elf"))}
            >
              Elves
            </Link>
            <Link
              className="people-links"
              onClick={() => dispatch(fetchPeople("Orc"))}
            >
              Orcs
            </Link>
          </ul>
        </div>
        <div className="searchField-div">
          <input className="searchField" placeholder="..." />
          {/* onChange={onSearchChange} */}
        </div>

        <div className="people-list">
          {peoples.people ? (
            peoples.people.map(x => (
              <Link to={`/people/${x._id}`} className="people-list-item">
                {" "}
                {x.name}{" "}
              </Link>
            ))
          ) : (
            <h1>Undefined</h1>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default People;
