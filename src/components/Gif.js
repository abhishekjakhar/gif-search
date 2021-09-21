import * as React from "react";

function Gif(props) {
  return (
    <li className="gif-wrap">
      <img src={props.url} alt="" />
    </li>
  );
}

export default Gif;
