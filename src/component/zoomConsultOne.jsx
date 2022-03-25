import React from "react";
import "./css/zoomConsult.css";
import { Link } from "react-router-dom";

const ZoomConsultOne = () => {
  return (
    <>
      <div className="zoom">
        <div className="zoom_left">
          <div className="progressBar">
            <div className="progress">
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
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
              <p>Experience</p>
            </div>
            <div
              className= "bar"

            ></div>
            <div className="progress">
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
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
              <p>Zoom Consultant</p>
            </div>
            <div
              className="bar"
            ></div>
            <div className="progress">
              <div
                style={{
                  padding: "1em",
                  width: "15px",
                  height: "15px",
                  border: "1px solid green",
                  textAlign: "center",
                  borderRadius: "100%",
                }}
              >
                3
              </div>
              <p>Design Fees</p>
            </div>
          </div>
        </div>
        <div className="zoom_right">
          <div className="container_text" style={{alignItems: "flex-start"}}>
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
