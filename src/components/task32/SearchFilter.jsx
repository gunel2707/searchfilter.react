import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
// 2) Search proqrami yazin. İstifadəçi input-na gore elementlərin siyahısını filtrləyən proqram yaradın.
const SearchFilter = () => {
  let array = ["apple", "banana", "cherry", "Date", "Fig", "Grape"];

  // let [Searchfiltr, setSearchfiltr] = useState("");
  const [input, setinput] = useState("");

  if (input == "") {
  } else
    array = array.filter((item) =>
      item.trim().toLowerCase().includes(input.trim().toLowerCase())
    );

  return (
    <>
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => setinput(e.target.value)}
      />
      {/* <CiSearch onClick={filter} /> */}
      <h1>Filter List</h1>
      <ul>
        {array.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default SearchFilter;
