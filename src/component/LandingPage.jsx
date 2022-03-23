import React, { useState, useEffect } from "react";
import "../component/css/landingPage.css";

function ProjectDetail(props) {
  const [projectId, setProjectId] = useState("1");

  const project = (e) => {
    setProjectId(e.target.id);
  };
  return (
    <>
      <div
        style={{
          borderRadius: "5px",
          //   border: "3px solid #ededed",
          margin: "1em 1.2em",
        }}
      >
        <div
          style={{
            margin: "1em",
            padding: "1em 0 0",
            // width: "90%",
            display: "flex",
            borderBottom: "1px solid #888888",
          }}
        >
          <button
            id="1"
            className="project"
            style={{
              padding: "0.5em",
              border: "none",
              borderRadius: "2px",
              borderBottom: projectId === "1" ? "5px solid #3B5998" : "none",
              height: "100%",
              marginRight: "1em",
              fontSize: "15px",
              backgroundColor: "transparent",
              color: projectId === "1" ? "#3B5998" : "#888888",
            }}
            onClick={project}
          >
            Project 1
          </button>
          <button
            id="2"
            className="project"
            style={{
              padding: "0.5em",
              border: "none",
              borderRadius: "2px",
              borderBottom: projectId === "2" ? "5px solid #3B5998" : "none",
              height: "100%",
              marginRight: "1em",
              fontSize: "15px",
              backgroundColor: "transparent",
              color: projectId === "2" ? "#3B5998" : "#888888",
            }}
            onClick={project}
          >
            Project 2
          </button>
          <button
            id="3"
            className="project"
            style={{
              padding: "0.5em",
              border: "none",
              borderRadius: "2px",
              borderBottom: projectId === "3" ? "5px solid #3B5998" : "none",
              height: "100%",
              marginRight: "1em",
              fontSize: "15px",
              backgroundColor: "transparent",
              color: projectId === "3" ? "#3B5998" : "#888888",
            }}
            onClick={project}
          >
            Project 3
          </button>
        </div>
        <div style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)", padding: "1em 0", borderRadius: "10px"}}>
          <div style={{ margin: "1em 1.5em" }} className="project_main">
            <h3>Project Title</h3>
            <span>Building Name</span> <span>City</span>
          </div>
          <div style={{ margin: "1em", display: "flex" }}>
            <div style={{ margin: "0.5em", width: "60%" }}>
              <img
                style={{ width: "100%", height: "100%", borderRadius: "5px" }}
                src="https://perkinswill.com/wp-content/uploads/2022/03/WM_desktop_final_02-scaled.jpg"
                alt=""
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "40%",
              }}
            >
              <img
                style={{ margin: "3px", height: "195px", borderRadius: "5px" }}
                src="https://perkinswill.com/wp-content/uploads/2022/03/WM_desktop_final_02-scaled.jpg"
                alt=""
              />
              <img
                style={{ margin: "3px", height: "195px", borderRadius: "5px" }}
                src="https://perkinswill.com/wp-content/uploads/2022/03/WM_desktop_final_02-scaled.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectPage() {
  const [popupDisplay, setpopupDisplay] = useState(false);
  return (
    <>
      <div style={{ width: "80%", margin: "1em auto" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "65%" }}>
            <ProjectDetail />
          </div>

          <div style={{ width: "35%", margin: "0 1em 0 0" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "5px",
                margin: "1em 0 0",
                marginTop: "18%",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  margin: "0.5em",
                  minWidth: "250px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ backgroundColor: "#c7d1e1", borderRadius: "5px" }}
                >
                  <img
                    src="https://img.icons8.com/material-outlined/96/4a90e2/user-male-circle.png"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 1em",
                    margin: "1em",
                    // width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <h3>ABC Design Firm</h3>
                  <p>2987356223</p>
                  <p>saket, New Delhi</p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "0.2em", padding: "1em 0" }}>
              <button
                onClick={() => {
                  setpopupDisplay(true);
                }}
                style={{
                  width: "100%",
                  margin: "0.2em 0",
                  padding: "0.4em",
                  fontSize: "20px",
                  borderRadius: "5px",
                  backgroundColor: "#3c5899",
                  border: "2px solid #3c5899",
                  color: "white",
                //   border: "none",
                  lineHeight: "30px",
                }}
              >
                Confirm Your listing with iDesign
              </button>
              <button
                onClick={() => {
                  setpopupDisplay(true);
                }}
                style={{
                  width: "100%",
                  margin: "0.2em 0",
                  padding: "0.4em",
                  borderRadius: "5px",
                  border: "2px solid #3c5899",
                  fontSize: "20px",
                  color: "#3c5899",
                  backgroundColor: "white",
                  lineHeight: "30px",
                }}
              >
                Edit Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="close"
        style={{
          display: popupDisplay ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "fixed",
          width: "100vw",
          height: "100vh",
          top: "0px",
          left: "0px",
        }}
        onClick={(e) => {
          if (e.target.id === "close") {
            setpopupDisplay(false);
          }
        }}
      >
        <div
          className="form"
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            display: "flex",
            padding: "2em",
            flexDirection: "column",
            minWidth: "280px",
            width: "30%",
          }}
        >
          <h1>Sign Up</h1>
          <label for="#email" style={{ fontSize: "15px", marginTop: "1em" }}>
            Email
          </label>
          <input type="email" id="email" style={{ padding: "1em" }} />
          <label for="#password" style={{ fontSize: "15px", marginTop: "1em" }}>
            Passwod
          </label>
          <input type="password" id="password" style={{ padding: "1em" }} />
          <button
            style={{
              width: "100%",
              margin: "0.2em",
              marginTop: "1em",
              padding: "0.4em",
              fontSize: "20px",
              borderRadius: "5px",
              backgroundColor: "#3c5899",
              color: "white",
              border: "none",
            }}
          >
            Create Account
          </button>
          <div
            style={{
              display: "flex",
              margin: "1em",
              justifyContent: "center",
              alignItems: "center",
              color: "dddddd",
              fontSize: "15px",
            }}
          >
            <span
              style={{
                height: "2px",
                minWidth: "35%",
                margin: "1em",
                backgroundColor: "#888888",
              }}
            ></span>
            OR
            <span
              style={{
                height: "2px",
                minWidth: "35%",
                margin: "1em",
                backgroundColor: "#888888",
              }}
            >
              -
            </span>
          </div>
          <button
            style={{
              width: "100%",
              margin: "0.2em",
              padding: "0.4em",
              borderRadius: "5px",
              border: "2px solid #888888",
              fontSize: "20px",
              color: "#999999",
              backgroundColor: "white",
            }}
          >
            Sign Up with Google
          </button>
        </div>
        ;
      </div>
    </>
  );
}
export default ProjectPage;
