import React from "react";

export default function OutputStream(props) {
  return (
    <div>
      <p>
        outputstream: <span>{props.input}</span>
      </p>
    </div>
  );
}
