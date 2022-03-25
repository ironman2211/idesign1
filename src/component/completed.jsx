import React from 'react'
import "./css/completed.css";

const Completed = () => {
  return (
    <div className="completed">
      <div className="complete-icon">
        <div
          style={{
            padding: "1em",
            width: "15px",
            height: "15px",
            border: "1px solid green",
            textAlign: "center",
            borderRadius: "100%",
            background: "linear-gradient(180deg, #2CBF81 0%, #178556 100%)",
          }}
        >
          <i class="fa fa-check" aria-hidden="true"></i>
        </div>
        <h3>Congratulation</h3>
        <p>You have completed the profile building process</p>
        <button id="next-comp">
          Next
        </button>
      </div>
    </div>
  );
}

export default Completed;