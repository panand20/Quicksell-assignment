import React from "react";

export default function CardUser(props) {
  return (
    <div>
      {/* <li>{props.status}</li>
                    <li>{props.priority}</li> */}
      {/* <li>{props.userId}</li> */}
      {/* <p style={{float:'right'}}>{props.id}</p> */}

      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid rgba(149, 157, 165, 0.2)",
          borderRadius: "7px",
          boxShadow: "rgba(149, 157, 165, 0.4) 0px 5px 10px",
          padding: "10px 10px 10px 10px",
          width: "15vw",
          marginTop:"10px"
        }}
      >
        <text
          style={{ color: "grey", fontSize: "14px", display: "inline-block" }}
        >
          {props.id}
        </text>
        <p style={{ fontWeight: "500", fontSize: "14px" }}>{props.title}</p>
        <div
          style={{
            display: "inline-block",
            border: "1px solid rgba(149, 157, 165, 0.2)",
            fontSize: "12px",
            color: "grey",
            padding: "3px",
            marginRight: "5px",
            borderRadius: "5px",
          }}
        >
          ---
        </div>
        <div
          style={{
            display: "inline-block",
            border: "1px solid rgba(149, 157, 165, 0.2)",
            fontSize: "12px",
            color: "grey",
            padding: "3px",
            borderRadius: "5px",
          }}
        >
          <svg fill="none" viewBox="0 0 10 10" height="1em" width="1em">
            <path
              fill="currentColor"
              d="M9.875 7.5a2.375 2.375 0 11-4.75 0 2.375 2.375 0 014.75 0z"
            />
          </svg>

          {props.tag}
        </div>
      </div>
    </div>
  );
}
