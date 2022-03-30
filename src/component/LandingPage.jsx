import React, { useState } from "react";
import "../component/css/landingPage.css";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

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
          margin: "1em 1.2em",
        }}
      >
        <div className="project-navigator">
          <button
            id="1"
            className="project"
            style={{
              border: "none",
              borderRadius: "2px",
              borderBottom: projectId === "1" ? "5px solid #3B5998" : "none",
              height: "100%",
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
              border: "none",
              borderRadius: "2px",
              borderBottom: projectId === "2" ? "5px solid #3B5998" : "none",
              height: "100%",
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
              border: "none",
              borderRadius: "2px",
              borderBottom: projectId === "3" ? "5px solid #3B5998" : "none",
              height: "100%",
              backgroundColor: "transparent",
              color: projectId === "3" ? "#3B5998" : "#888888",
            }}
            onClick={project}
          >
            Project 3
          </button>
        </div>
        <div
          style={{
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
            padding: "1em 0",
            borderRadius: "10px",
          }}
        >
          <div style={{ margin: "1em 1.5em" }} className="project_main">
            <h3>Project Title</h3>
            <span>Building Name</span> <span>City</span>
          </div>
          <div className="image-box">
            <div className="head-image">
              <img
                src="https://perkinswill.com/wp-content/uploads/2022/03/WM_desktop_final_02-scaled.jpg"
                alt=""
              />
            </div>
            <div className="secondary-image">
              <img
                style={{
                  margin: "5px 3px",
                  height: "50%",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
                src="https://perkinswill.com/wp-content/uploads/2022/03/WM_desktop_final_02-scaled.jpg"
                alt=""
              />
              <img
                style={{
                  margin: "5px 3px ",
                  height: "50%",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
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
    <div className="container">
      <div className="project-page">
        <div className="project-page-lower">
          <div className="project-container">
            <ProjectDetail />
          </div>

          <div className="info-head">
            <div className="info-container">
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
                <div className="info-text">
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
                  fontSize: "15px",
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
                  fontSize: "15px",
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
        className="close"
        style={{
          display: popupDisplay ? "flex" : "none",
        }}
        onClick={(e) => {
          if (e.target.id === "close") {
            setpopupDisplay(false);
          }
        }}
      >
        <div className="form">
          <h2>Sign Up</h2>
          <label for="#email" style={{ fontSize: "15px", margin: "1em 0" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            style={{ padding: "0.9em", borderRadius: "7px" }}
          />
          <label for="#password" style={{ fontSize: "15px", margin: "1em 0" }}>
            Passwod
          </label>
          <input
          className="InputPass"
            type="password"
            id="password"
            style={{ padding: "0.9em", borderRadius: "7px" }}
          />
          <svg
          className="eye"
            width="22"
            height="15"
            viewBox="0 0 22 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 2C14.79 2 18.17 4.13 19.82 7.5C18.17 10.87 14.8 13 11 13C7.2 13 3.83 10.87 2.18 7.5C3.83 4.13 7.21 2 11 2ZM11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 5C12.38 5 13.5 6.12 13.5 7.5C13.5 8.88 12.38 10 11 10C9.62 10 8.5 8.88 8.5 7.5C8.5 6.12 9.62 5 11 5ZM11 3C8.52 3 6.5 5.02 6.5 7.5C6.5 9.98 8.52 12 11 12C13.48 12 15.5 9.98 15.5 7.5C15.5 5.02 13.48 3 11 3Z"
              fill="#A7A7A7"
            />
          </svg>

          <Link to="/exp">
            <button
              style={{
                width: "100%",
                margin: "0.2em",
                marginTop: "1em",
                padding: "0.5em",
                fontSize: "15px",
                borderRadius: "5px",
                backgroundColor: "#3c5899",
                color: "white",
                border: "none",
              }}
            >
              Create Account
            </button>
          </Link>

          <div
            style={{
              display: "flex",
              margin: "1em",
              justifyContent: "center",
              alignItems: "center",
              color: "dddddd",
              fontSize: "12px",
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
            ></span>
          </div>
          <button
          className="gbutton"
            style={{
              width: "100%",
              margin: "0.2em",
              padding: "0.5em",
              borderRadius: "5px",
              border: "2px solid #888888",
              fontSize: "15px",
              color: "#999999",
              backgroundColor: "white",
            }}
          >
            <img className="gimage" src="/images/google.svg" alt="google-img"/>
            <span></span>Sign Up with Google
          </button>
        </div>
        ;
      </div>
    </div>
  );
}
export default ProjectPage;
