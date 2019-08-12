import React from "react";

const BoxSingle = props => (
  <a href={props.url} target="__blank" rel="noopener">
    <div>{props.text}</div>
  </a>
);

export default BoxSingle;
