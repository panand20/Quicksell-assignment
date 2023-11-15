import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function StatusGroup(props) {
  const [allData, setAllData] = useState();
  const [toDo, setToDo] = useState([]);
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
                .filter((item) => item.status === "Todo")
                .sort((a, b) => b.priority - a.priority);
              setToDo(ticketItems);

              const ticketItems2 = data.tickets
                .filter((item) => item.status === "In progress")
                .sort((a, b) => b.priority - a.priority);
              setInProgress(ticketItems2);

              const ticketItems3 = data.tickets
                .filter((item) => item.status === "Backlog")
                .sort((a, b) => b.priority - a.priority);
              setBacklog(ticketItems3);
            } else if (props.order === "Title") {
              const ticketItems = data.tickets
                .filter((item) => item.status === "Todo")
                .sort((a, b) => a.title - b.title);
              setToDo(ticketItems);

              const ticketItems2 = data.tickets
                .filter((item) => item.status === "In progress")
                .sort((a, b) => a.title - b.title);
              setInProgress(ticketItems2);

              const ticketItems3 = data.tickets
                .filter((item) => item.status === "Backlog")
                .sort((a, b) => a.title - b.title);
              setBacklog(ticketItems3);
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
    console.log(toDo, "To Do");
    console.log(backlog, "Backlog");
    console.log(inProgress, "In Progress");
  }

  return (
    <div className="status-group">
      <div className="sections">
      <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 01.918 0l.064-.998A8.113 8.113 0 008 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 00-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 00-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 01.793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 00-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 00-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 00-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 00-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 000 1.046l.998-.064a7.117 7.117 0 010-.918l-.998-.064zM16 8a8.1 8.1 0 00-.017-.523l-.998.064a7.11 7.11 0 010 .918l.998.064A8.1 8.1 0 0016 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 01-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 00.524.905l.83-.556a6.999 6.999 0 01-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 01-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 01-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 01-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 01-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 001.012-.27l-.321-.948a6.954 6.954 0 01-.884.237l.194.98zm-2.083.135a8.1 8.1 0 001.046 0l-.064-.998a7.11 7.11 0 01-.918 0l-.064.998zM4.5 7.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z" />
    </svg>
        <text style={{ fontSize: "16px", fontWeight: "500" }}>Backlog</text>
        <text style={{ fontSize: "16px", fontWeight: "500", color: "grey" }}>
          {" "}
          &nbsp;&nbsp; {backlog.length}
        </text>
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

        {backlog ? (
          <>
            {backlog.map((e) => {
              return (
                <div style={{ marginTop: "10px" }}>
                  <Card
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
        <svg fill="#95A3B4" viewBox="0 0 16 16" height="1em" width="1em">
          <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
        </svg>
        <text style={{ fontSize: "16px", fontWeight: "500" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;Todo
        </text>
        <text style={{ fontSize: "16px", fontWeight: "500", color: "grey" }}>
          {" "}
          &nbsp;&nbsp; {toDo.length}
        </text>
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
        {toDo ? (
          <>
            {toDo.map((e) => {
              return (
                <>
                  <div style={{ marginTop: "10px" }}>
                    <Card
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
          fill="#95A3B4"
          height="1em"
          width="1em"
          {...props}
        >
          <path d="M13 2v2c4.39.54 7.5 4.53 6.96 8.92A8.014 8.014 0 0113 19.88v2c5.5-.6 9.45-5.54 8.85-11.03C21.33 6.19 17.66 2.5 13 2m-2 0c-1.96.18-3.81.95-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68V2M4.26 5.67A9.81 9.81 0 002.05 11h2c.19-1.42.75-2.77 1.64-3.9L4.26 5.67M2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 014.06 13h-2m5 5.37l-1.39 1.37A9.994 9.994 0 0011 22v-2a8.002 8.002 0 01-3.9-1.63h-.04z" />
        </svg>
        <text style={{ fontSize: "16px", fontWeight: "500" }}>
          &nbsp;&nbsp;&nbsp;&nbsp; In Progress
        </text>
        <text style={{ fontSize: "16px", fontWeight: "500", color: "grey" }}>
          {" "}
          &nbsp;&nbsp; {inProgress.length}
        </text>
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
        {inProgress ? (
          <>
            {inProgress.map((e) => {
              return (
                <>
                  <div style={{ marginTop: "10px" }}>
                    <Card
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
        <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em">
          <path
            fill="#5F6BD2"
            fillRule="evenodd"
            d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm7.072 3.21l4.318-5.398-.78-.624-3.682 4.601L4.32 7.116l-.64.768 3.392 2.827z"
            clipRule="evenodd"
          />
        </svg>
        <text style={{ fontSize: "16px", fontWeight: "500" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;Done
        </text>
        <text style={{ fontSize: "16px", fontWeight: "500", color: "grey" }}>
          {" "}
          &nbsp;&nbsp; {done.length}
        </text>
        
      </div>
      <div className="sections">
        <svg
          viewBox="0 0 840 1000"
          fill="#95A3B4"
          height="1.3em"
          width="1.3em"
          {...props}
        >
          <path d="M420 80c116 0 215 41 297 123s123 181 123 297-41 215-123 297-181 123-297 123-215-41-297-123S0 616 0 500s41-215 123-297S304 80 420 80m86 420l154-154-86-86-154 152-152-152-88 86 154 154-154 152 88 86 152-152 154 152 86-86-154-152" />
        </svg>
        <text style={{ fontSize: "16px", fontWeight: "500" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;Canceled
        </text>
        <text style={{ fontSize: "16px", fontWeight: "500", color: "grey" }}>
          {" "}
          &nbsp;&nbsp; {Cancelled.length}
        </text>{" "}
      </div>
    </div>
  );
}
