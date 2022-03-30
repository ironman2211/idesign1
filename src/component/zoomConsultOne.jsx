import React from "react";
import "./css/zoomConsult.css";
import { Link } from "react-router-dom";

const ZoomConsultOne = () => {
  return (
    <>
      <div className="zoom">
        <div className="zoom_left">
          <div className="progressBar">
            <div className="progress active">
              <div
                style={{
                  padding: "1em",
                  width: "15px",
                  height: "15px",
                  border: "1px solid green",
                  textAlign: "center",
                  borderRadius: "100%",
                  background:
                    "linear-gradient(180deg, #2CBF81 0%, #178556 100%)",
                }}
              >
                <svg
                  width="23"
                  height="18"
                  viewBox="0 0 23 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.11513 14.5897L2.31918 9.57972C1.78478 9.02147 0.93521 9.02147 0.400804 9.57972C-0.133601 10.138 -0.133601 11.0254 0.400804 11.5837L6.14224 17.5813C6.67665 18.1396 7.53992 18.1396 8.07432 17.5813L22.5992 2.42266C23.1336 1.86441 23.1336 0.976938 22.5992 0.418688C22.0648 -0.139563 21.2152 -0.139563 20.6808 0.418688L7.11513 14.5897Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p>Experience</p>
            </div>
            <div className="bar complete"></div>
            <div className="progress active">
              <div
                style={{
                  padding: "1em",
                  width: "15px",
                  height: "15px",
                  border: "1px solid green",
                  textAlign: "center",
                  borderRadius: "100%",
                  background:
                    "linear-gradient(180deg, #2CBF81 0%, #178556 100%)",
                }}
              >
                <svg
                  width="23"
                  height="18"
                  viewBox="0 0 23 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.11513 14.5897L2.31918 9.57972C1.78478 9.02147 0.93521 9.02147 0.400804 9.57972C-0.133601 10.138 -0.133601 11.0254 0.400804 11.5837L6.14224 17.5813C6.67665 18.1396 7.53992 18.1396 8.07432 17.5813L22.5992 2.42266C23.1336 1.86441 23.1336 0.976938 22.5992 0.418688C22.0648 -0.139563 21.2152 -0.139563 20.6808 0.418688L7.11513 14.5897Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p>Zoom Consultant</p>
            </div>
            <div className="bar complete"></div>
            <div className="progress active">
              <div
                style={{
                  padding: "1em",
                  width: "15px",
                  height: "15px",
                  border: "1px solid white",
                  textAlign: "center",
                  borderRadius: "100%",
                  background: "white",
                  color: "black",
                }}
              >
                3
              </div>
              <p>Design Fees per Sqft</p>
            </div>
            <div className="bar"></div>
            <div className="progress">
              <div
                style={{
                  padding: "1em",
                  width: "15px",
                  height: "15px",
                  border: "1px solid grey",
                  textAlign: "center",
                  borderRadius: "100%",
                  background: "#6B8CD1",
                  color: "white",
                }}
              >
                4
              </div>
              <p>Design Fees per Room</p>
            </div>
          </div>
        </div>
        <div className="zoom_right">
          <div className="container_text" style={{ alignItems: "flex-start" }}>
            <span>
              Please Answer a few question as we load the Edit Page (it will
              take 2 mins)
            </span>
            <p>
              Design Fee Charges <strong>per Sq.ft basis</strong>
            </p>
            <span>
              How much would you charge for per Sq.ft basis for Home Interiors ?
            </span>
            <div className="buttons">
              <input type="text" placeholder="/Sq.ft" />
              <Link to="/zoom/two">
                <button id="next" className="next_button">
                  Next
                </button>
              </Link>
            </div>
            <span>
              <p
                style={{
                  fontSize: "1.1em",
                  color: "Black",
                  fontWeight: "500",
                  margin: "1em 0 0.5em",
                }}
              >
                How Does Fees per Sqft Work?
              </p>
              <ul>
                <li>
                  Provide a per sqft fees for all interior design services -
                  including drawings, visits, 3Ds, GFCs etc
                </li>
                <li>
                  Connect with Homeowners and provide Quotations and Explain
                  Offerings
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZoomConsultOne;
