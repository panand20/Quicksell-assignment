import React, { useEffect, useState } from "react";
import Display from "./Display";
import StatusGroup from "./StatusGroup";
import UserGroup from "./UserGroup";
import PriorityGroup from "./PriorityGroup";

export default function Home() {
  const [viewG, setViewG] = useState("Status");
  const [viewO, setViewO] = useState("Priority");
  const [visible, setVisible] = useState(false);

  const getData = () => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment", {
      method: "GET",
    }).then((response) =>
      response
        .json()
        .then((data) => ({
          data: data,
          status: response.status,
        }))
        .then((res) => {
          if (res.status < 300) {
            console.log(res.data);
          }
        })
    );
  };

  useEffect(() => {
    getData();
  });
  // const getView = (val) => {
  //   console.log(val);
  //   setViewO(val);
  // };

  const changeVisible = () => {
    setVisible(!visible);
  };

  const handleOrderChange = (event) => {
    setViewO(event.target.value);
    // You can perform additional logic based on the selected group here
  };

  const handleGroupChange = (event) => {
    setViewG(event.target.value);
    // You can perform additional logic based on the selected group here
  };
  console.log("reached");
  return (
    <div>
      <div style={{ backgroundColor: "#fff", padding: "10px 10px 10px 20px" }}>
        <button style={{ boxShadow: "10px" }} onClick={changeVisible}>
          Display
        </button>
        <div style={{ position: "fixed" }}>
          {visible ? (
            <div
              style={{
                height: "7vh",
                width: "10vw",
                backgroundColor: "#fff",
                margin: "10px 0px 0px 0px",
                // borderRadius: "4px",
                // border: "1px",
                padding: "10px",
                border: "1px solid rgba(149, 157, 165, 0.2)",
          borderRadius: "7px",
          boxShadow: "rgba(149, 157, 165, 0.4) 0px 5px 10px",
              }}
            ><div>
              <text style={{fontSize:'14px', color:'grey'}}>Grouping&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</text>
              <select style={{width:'9vh'}} value={viewO} onChange={handleOrderChange}>
                <option value={"Priority"}>Priority</option>
                <option value={"Title"}>Title</option>
              </select>
              </div>
              <br />
              <div>
              <text style={{fontSize:'14px', color:'grey'}}>Ordering&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</text>
              <select style={{width:'9vh'}} value={viewG} onChange={handleGroupChange}>
                <option value={"Status"}>Status</option>
                <option value={"User"}>User</option>
                <option value={"Priority"}>Priority</option>
              </select>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {viewG === "Status" ? (
        <>
          <StatusGroup order={viewO} />
        </>
      ) : null}
      {viewG === "User" ? (
        <>
          <UserGroup />
        </>
      ) : null}
      {viewG === "Priority" ? (
        <>
          <PriorityGroup order={viewO} />
        </>
      ) : null}
    </div>
  );
}
