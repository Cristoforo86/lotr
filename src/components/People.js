import React from "react";
import "./people.css";
import PeopleList from "./PeopleList";

import { Link } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";
import { fetchPeople, setSearchField } from "../redux/actions/index";

function People() {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div>
        <div>
          <ul className="people-header">
            <Link
              className="people-links"
              onClick={() => dispatch(fetchPeople("Human"))}
              to="/people"
            >
              Humans
            </Link>
            <Link
              className="people-links"
              onClick={() => dispatch(fetchPeople("Hobbit"))}
              to="/people"
            >
              Hobbits
            </Link>
            <Link
              className="people-links"
              onClick={() => dispatch(fetchPeople("Dwarf"))}
              to="/people"
            >
              Dwarfs
            </Link>
            <Link
              className="people-links"
              onClick={() => dispatch(fetchPeople("Elf"))}
              to="/people"
            >
              Elves
            </Link>
            <Link
              className="people-links"
              onClick={() => dispatch(fetchPeople("Orc"))}
              to="/people"
            >
              Orcs
            </Link>
          </ul>
        </div>
        <div className="searchField-div">
          <input
            className="searchField"
            placeholder="..."
            onChange={e => dispatch(setSearchField(e.target.value))}
          />
        </div>

        <PeopleList />
      </div>
    </React.Fragment>
  );
}

export default People;
