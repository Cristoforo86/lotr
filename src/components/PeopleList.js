import React, { useEffect } from "react";
import "./people.css";
import { Link } from "react-router-dom";

//Redux

import { useSelector } from "react-redux";

function PeopleList() {
  const peoples = useSelector(state => state.fetch);
  const search = useSelector(state => state.search.searchField);

  useEffect(() => {}, [search]);

  return (
    <div>
      <div className="people-list">
        {peoples.people ? (
          peoples.people
            .filter(item => {
              return item.name.toLowerCase().includes(search.toLowerCase());
            })
            .map(x => (
              <Link
                to={`/people/${x._id}`}
                className="people-list-item"
                key={x._id}
              >
                {" "}
                {x.name}{" "}
              </Link>
            ))
        ) : (
          <h1>Undefined</h1>
        )}
      </div>
    </div>
  );
}
export default PeopleList;
