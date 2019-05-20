import React from "react";

export default function Buttons() {
  function handleClick(event) {
    const target = event.target.innerHTML;
    document.body.insertAdjacentText("afterbegin", target);
    return target;
  }

  return (
    <ul>
      <li>
        <button onClick={handleClick}>&#1049;</button>
      </li>
      <li>
        <button onClick={handleClick}>&#859;</button>
      </li>
      <li>
        <button onClick={handleClick}>&#1029;</button>
      </li>
      <li>
        <button onClick={handleClick}>&#995;</button>x
      </li>
    </ul>
  );
}
