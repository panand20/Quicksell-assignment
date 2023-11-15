import React, { useState } from "react";

export default function Display(props) {
  // const [visible, setVisible] = useState(false);
  return (
    <div style={{ position: "fixed" }}>
      {props.visible ? (
        <div
          style={{
            height: "15vh",
            width: "20vw",
            backgroundColor: "#ececec",
            margin: "10px 0px 0px 0px",
            borderRadius: "4px",
            border: "1px",
          }}
        >
          yo
        </div>
      ) : null}
    </div>
  );
}
