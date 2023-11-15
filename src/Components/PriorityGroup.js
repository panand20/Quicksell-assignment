import React, { useEffect, useState } from "react";
import Card from "./Card";
import CardPriority from "./CardPriority";

export default function PriorityGroup(props) {
  const [allData, setAllData] = useState();
  const [noPriority, setNoPriority] = useState([]);
  const [lowPriority, setLowPriority] = useState([]);
  const [medPriority, setMedPriority] = useState([]);
  const [highPriority, setHighPriority] = useState([]);
  const [urgPriority, setUrgPriority] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [backlog, setBacklog] = useState([]);
  const [done, setDone] = useState([]);
  const [Cancelled, setCancelled] = useState([]);

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment", {
      method: "GET",
    }).then((response) =>
      response
        .json()
        .then((data) => {
          if (data && data.tickets && data.users) {
            // Extract the "ticket" objects and filter based on the "status" field
            if (props.order === "Priority") {
              const ticketItems = data.tickets
                .filter((item) => item.priority === 0)
                .sort((a, b) => b.priority - a.priority);
              setNoPriority(ticketItems);

              const ticketItems2 = data.tickets
                .filter((item) => item.priority === 1)
                .sort((a, b) => b.priority - a.priority);
              setLowPriority(ticketItems2);

              const ticketItems3 = data.tickets
                .filter((item) => item.priority === 2)
                .sort((a, b) => b.priority - a.priority);
              setMedPriority(ticketItems3);

              const ticketItems4 = data.tickets
                .filter((item) => item.priority === 3)
                .sort((a, b) => b.priority - a.priority);
              setHighPriority(ticketItems4);

              const ticketItems5 = data.tickets
                .filter((item) => item.priority === 4)
                .sort((a, b) => b.priority - a.priority);
              setUrgPriority(ticketItems5);
            } else if (props.order === "Title") {
              const ticketItems = data.tickets
                .filter((item) => item.priority === 0)
                .sort((a, b) => a.title - b.title);
              setNoPriority(ticketItems);

              const ticketItems2 = data.tickets
                .filter((item) => item.priority === 1)
                .sort((a, b) => a.title - b.title);
              setLowPriority(ticketItems2);

              const ticketItems3 = data.tickets
                .filter((item) => item.priority === 2)
                .sort((a, b) => a.title - b.title);
              setMedPriority(ticketItems3);

              const ticketItems4 = data.tickets
                .filter((item) => item.priority === 3)
                .sort((a, b) => a.title - b.title);
              setHighPriority(ticketItems4);

              const ticketItems5 = data.tickets
                .filter((item) => item.priority === 4)
                .sort((a, b) => a.title - b.title);
              setUrgPriority(ticketItems5);
            }

            // getOrder();
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
    // console.log(noPriority, "To Do");
    // console.log(backlog, "Backlog");
    // console.log(inProgress, "In Progress");
  }

  return (
    <div className="status-group">
      <div className="sections">
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
        <text style={{ fontSize: "14px", fontWeight: "500" }}>&nbsp;&nbsp;&nbsp;No Priority</text>
        <text style={{ fontSize: "14px", fontWeight: "500", color:"grey" }}>&nbsp;&nbsp;&nbsp;{noPriority.length}</text>
        <text
          style={{
            fontSize: "16px",
            fontWeight: "500",
            float: "right",
            marginRight: "35px",
          }}
        >
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

        {noPriority ? (
          <>
            {noPriority.map((e) => {
              return (
                <div style={{ marginTop: "10px" }}>
                  <CardPriority
                    status={e.status}
                    title={e.title}
                    priority={e.priority}
                    id={e.id}
                    userId={e.userId}
                    tag={e.tag}
                  />
                </div>
              );
            })}
          </>
        ) : null}
      </div>
      <div className="sections">
      <svg
      fill="none"
      stroke="orange"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M8 16v-4a4 4 0 018 0v4M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7" />
      <path d="M7 16 H17 A1 1 0 0 1 18 17 V19 A1 1 0 0 1 17 20 H7 A1 1 0 0 1 6 19 V17 A1 1 0 0 1 7 16 z" />
    </svg>
        <text style={{ fontSize: "14px", fontWeight: "500" }}>&nbsp;&nbsp;&nbsp;Urgent</text>
        <text style={{ fontSize: "14px", fontWeight: "500", color:"grey" }}>&nbsp;&nbsp;&nbsp;{urgPriority.length}</text>

        <text
          style={{
            fontSize: "16px",
            fontWeight: "500",
            float: "right",
            marginRight: "35px",
          }}
        >
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

        {urgPriority ? (
          <>
            {urgPriority.map((e) => {
              return (
                <>
                  <div style={{ marginTop: "10px" }}>
                    <CardPriority
                      status={e.status}
                      title={e.title}
                      priority={e.priority}
                      id={e.id}
                      userId={e.userId}
                      tag={e.tag}
                    />
                  </div>
                </>
              );
            })}
          </>
        ) : null}
      </div>
      <div className="sections">
      <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.4em"
      width="2.5em"
      {...props}
    >
      <path d="M3 16h2v5H3zm4-3h2v8H7zm4-3h2v11h-2z" />
    </svg>
        <text style={{ fontSize: "14px", fontWeight: "500" }}>High</text>
        <text style={{ fontSize: "14px", fontWeight: "500", color:"grey" }}>&nbsp;&nbsp;&nbsp;{highPriority.length}</text>

        <text
          style={{
            fontSize: "16px",
            fontWeight: "500",
            float: "right",
            marginRight: "35px",
          }}
        >
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
        {highPriority ? (
          <>
            {highPriority.map((e) => {
              return (
                <>
                  <div style={{ marginTop: "10px" }}>
                    <CardPriority
                      status={e.status}
                      title={e.title}
                      priority={e.priority}
                      id={e.id}
                      userId={e.userId}
                      tag={e.tag}
                    />
                  </div>
                </>
              );
            })}
          </>
        ) : null}
      </div>
      <div className="sections">
      <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.4em"
      width="2.5em"
      {...props}
    >
      <path d="M3 16h2v5H3zm4-3h2v8H7z" />
    </svg>
        <text style={{ fontSize: "14px", fontWeight: "500" }}>Medium</text>
        <text style={{ fontSize: "14px", fontWeight: "500", color:"grey" }}>&nbsp;&nbsp;&nbsp;{medPriority.length}</text>

        <text
          style={{
            fontSize: "16px",
            fontWeight: "500",
            float: "right",
            marginRight: "35px",
          }}
        >
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

        {medPriority ? (
          <>
            {medPriority.map((e) => {
              return (
                <>
                  <div style={{ marginTop: "10px" }}>
                    <CardPriority
                      status={e.status}
                      title={e.title}
                      priority={e.priority}
                      id={e.id}
                      userId={e.userId}
                      tag={e.tag}
                    />
                  </div>
                </>
              );
            })}
          </>
        ) : null}
      </div>
      <div className="sections">
      <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.4em"
      width="2.5em"
      {...props}
    >
      <path d="M3 16h2v5H3z" />
    </svg>
        <text style={{ fontSize: "14px", fontWeight: "500" }}>Low</text>
        <text style={{ fontSize: "14px", fontWeight: "500", color:"grey" }}>&nbsp;&nbsp;&nbsp;{lowPriority.length}</text>

        <text
          style={{
            fontSize: "16px",
            fontWeight: "500",
            float: "right",
            marginRight: "35px",
          }}
        >
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

        {lowPriority ? (
          <>
            {lowPriority.map((e) => {
              return (
                <>
                  <div style={{ marginTop: "10px" }}>
                    <CardPriority
                      status={e.status}
                      title={e.title}
                      priority={e.priority}
                      id={e.id}
                      userId={e.userId}
                      tag={e.tag}
                    />
                  </div>
                </>
              );
            })}
          </>
        ) : null}
      </div>
    </div>
  );
}
