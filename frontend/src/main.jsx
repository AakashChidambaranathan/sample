import React from "react";
import {createRoot} from "react-dom/client";
import './main.css';
const root=createRoot(document.getElementById("root"));
function Sample(){
  return(
    <div className="body">
      <ul><li>
          aakash
        </li>
        <li>naagini</li>
      </ul>
    </div>
  );
}
root.render(
  <Sample/>
)