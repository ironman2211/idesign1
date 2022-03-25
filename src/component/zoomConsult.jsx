import React from 'react';
import "./css/zoomConsult.css";
import { Link } from 'react-router-dom';

const ZoomConsult = () => {
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
                }}
              >
                2
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
                  border: "1px solid grey",
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
          <div className="container_text">
            <p>
              Earn money through <strong>Zoom Consultation</strong>
            </p>
            <span>
              How much would you charge for 1 Hour of Virtual Consultation ?
            </span>
            <div className="buttons">
              <input type="text" placeholder="/hour" />
              <Link to="/zoom/one">
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
                  margin: "1em 0",
                }}
              >
                How Does Zoom Consultation work?
              </p>
              <ul>
                <li>Connect to Homeowners looking for quick advice</li>
                <li>Mostly advisory service, no drawings to be provided.</li>
                <li>Schedule Meetings at mutual convenience.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ZoomConsult;