import React from "react";
import "./css/zoomConsult.css";
import { Link } from "react-router-dom";

const ZoomConsultTwo = () => {
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
            <div className="bar"></div>
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
            <div className="bar"></div>
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
          <div className="container_text" style={{ alignItems: "flex-start" }}>
            <p>
              Design Fee Charges <strong>for one Room</strong>
            </p>
            <span>
              How much would you charge for designing One Room in a Home ?
            </span>
            <div className="buttons">
              <input type="text" placeholder="/Room" />
              <Link to="/complete">
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
                How Does Per Room Design Fee work?
              </p>
              <ul>
                <li>
                  Applicable for Apartments, Builder Floors or Bungalows only.
                </li>
                <li>
                  Fee is charged irrespective of Room sizes upto 250 Sqft. Even
                  Toilet or Balcony Design is charged on per room
                </li>
                <li>
                  Easy to understand for homeowners and gets good response
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZoomConsultTwo;
