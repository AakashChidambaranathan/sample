import React from "react";
import {createRoot} from "react-dom/client";
import './main.css';
const root=createRoot(document.getElementById("root"));
function Sample(){
  return(
    <div className="body">
      <ul>
        <li>
          hello
        </li>
        <li>world</li>
      </ul>
    </div>
  );
}
root.render(
  <Sample/>
)