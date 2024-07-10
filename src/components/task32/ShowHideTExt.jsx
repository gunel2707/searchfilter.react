import React, { useState } from "react";
// 1)  Mətn parçasının görünən və ya gizli şəkildə dəyişdirilə biləcəyi proqram yaradın.
const ShowHideTExt = () => {
  let [hide, sethide] = useState(false);

  function Show() {
    sethide(false);
  }
  function Hide() {
    sethide(true);
  }
  return (
    <>
      <button onClick={Show}>Show Text</button>
      <button  onClick={Hide}>Hide Text</button>
      {hide == false ? <p>This Text is toggled</p> : ""}
    </>
  );
};

export default ShowHideTExt;
