import React from "react";


function Filter(props) {
  return (
    <div>
      Search:
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => props.handleFilter(e.target.value)}
      />
      <br />
    </div>
  );
}

export default Filter;
