import React, { useEffect, useState } from "react";
import Card from "./Card";
import CardUser from "./CardUser";

export default function UserGroup(props) {
  const [allData, setAllData] = useState();
  const [toDo, setToDo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [backlog, setBacklog] = useState([]);
  const [done, setDone] = useState([]);
  const [Cancelled, setCancelled] = useState([]);
  const [users, setUsers] = useState([]);
  const [ticketsByUser, setTicketsByUser] = useState({});

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment", {
      method: "GET",
    }).then((response) =>
      response
        .json()
        .then((data) => {
          if (data && data.tickets && data.users) {
            setUsers(data.users);
            console.log(data.users);
            setAllData(data.tickets);
          } else {
            console.error("API response is missing expected structure:", data);
          }
        })
        .catch((err) => {
          console.error(err);
        })
    );
  }, [props.order]);

  useEffect(() => {
    setData();
  }, []);

  function setData() {
    console.log(toDo, "To Do");
    console.log(backlog, "Backlog");
    console.log(inProgress, "In Progress");
  }

  return (
    <div className="status-group">
      {users.map((e) => {
        return (
          <>
            <div className="sections">
              <text style={{fontSize:'14px', fontWeight:"500"}}>{e.name}</text>
              <text style={{ fontSize: "16px", fontWeight: "500", float: "right" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
          >
            <defs>
              <style />
            </defs>
            <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
            <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
          </svg>
          &nbsp;&nbsp;&nbsp;&nbsp; 
          <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <g fill="currentColor" fillRule="evenodd">
        <path d="M11.5 10.5 A1 1 0 0 1 10.5 11.5 A1 1 0 0 1 9.5 10.5 A1 1 0 0 1 11.5 10.5 z" />
        <path d="M6.5 10.5 A1 1 0 0 1 5.5 11.5 A1 1 0 0 1 4.5 10.5 A1 1 0 0 1 6.5 10.5 z" />
        <path d="M16.5 10.5 A1 1 0 0 1 15.5 11.5 A1 1 0 0 1 14.5 10.5 A1 1 0 0 1 16.5 10.5 z" />
      </g>
    </svg>
        </text>
              {allData.map((el) => {
                return (
                  <>
                    {el.userId === e.id ? (
                      <>
                        <CardUser
                          status={el.status}
                          title={el.title}
                          priority={el.priority}
                          id={el.id}
                          userId={el.userId}
                          tag={el.tag}
                        />
                      </>
                    ) : null}
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}
