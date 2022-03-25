import React, { Component } from "react";
import "./css/experience.css";
import { Link } from "react-router-dom";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { key: "Dashboard" };
  }

  componentDidMount() {
    console.log("Hello");
  }
  render() {
    return (
      <div className="experience">
        <div className="experience_left">
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
                }}
              >
                1
              </div>
              <p>Experience</p>
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
                  border: "1px solid grey",
                  textAlign: "center",
                  borderRadius: "100%",
                }}
              >
                2
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
        <div className="experience_right">
          <p>
            How nuch <strong>experience</strong> do you have ?
          </p>
          <div className="selector">
            <select name="company" id="company">
              <option value="Company1">Company1</option>
              <option value="Company2">Company2</option>
              <option value="Company3">Company3</option>
              <option value="Company4">Company3</option>
            </select>
            <Link to="/zoom">
              <button id="next" className="next_button">
                Next
              </button>
            </Link>
          </div>
        </div>

        {/* <div>
              <div
                style={{
                  display: "flex",
                  margin: "2em 1em",
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{ maxWidth: "1000px", width: "100%", padding: "2em" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      width: "100%",
                      margin: "1em",
                      padding: "1em",
                    }}
                  >
                    <button
                      id="dashboard-section"
                      style={{
                        backgroundColor: "transparent",
                        borderRadius: "2px",
                        padding: "1em",
                        paddingBottom: "0em",
                        border:
                          this.state.key === "Dashboard"
                            ? "2px solid #efefef"
                            : "none",
                        borderBottom:
                          this.state.key === "Dashboard"
                            ? "none"
                            : "2px solid #efefef",
                      }}
                      onClick={() => {
                        this.setState({ key: "Dashboard" });
                      }}
                    >
                      Dashboard
                    </button>
                    <button
                      id="dish-section"
                      style={{
                        backgroundColor: "transparent",
                        borderRadius: "2px",
                        padding: "1em",
                        paddingBottom: "0em",
                        border:
                          this.state.key === "Dish"
                            ? "2px solid #efefef"
                            : "none",
                        borderBottom:
                          this.state.key === "Dish"
                            ? "none"
                            : "2px solid #efefef",
                      }}
                      onClick={() => {
                        this.setState({ key: "Dish" });
                      }}
                    >
                      Dish
                    </button>
                    <button
                      id="order-section"
                      style={{
                        backgroundColor: "transparent",
                        borderRadius: "2px",
                        padding: "1em",
                        paddingBottom: "0em",
                        border:
                          this.state.key === "Order"
                            ? "2px solid #efefef"
                            : "none",
                        borderBottom:
                          this.state.key === "Order"
                            ? "none"
                            : "2px solid #efefef",
                      }}
                      onClick={() => {
                        this.setState({ key: "Order" });
                      }}
                    >
                      Orders
                    </button>
                    <div
                      style={{
                        padding: "1em",
                        paddingBottom: "0em",
                        width: "100%",
                        // height: "100%",
                        borderBottom: "2px solid #efefef",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      display: this.state.key === "Dashboard" ? "" : "none",
                      width: "95%",
                    }}
                  >
                      Hii
                  </div>

                  <div
                    style={{
                      display: this.state.key === "Dish" ? "" : "none",
                      width: "95%",
                    }}
                  >
                    Bye
                  </div>

                  <div
                    style={{
                      display: this.state.key === "Order" ? "" : "none",
                      width: "95%",
                    }}
                  >
                    Neon
                  </div>
                </div>
              </div>
            </div> */}
      </div>
    );
  }
}
export default Experience;
