import React from "react";
// import Trees from "../Questions/Trees";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item op">
          <h4 class="accordion-header" id="arrays">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <h4>
                <strong>Arrays & Hashing</strong>
              </h4>
            </button>
          </h4>
        </div>

        <div class="accordion-item op">
          <h4 class="accordion-header" id="tpointers">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <h4>
                <strong>Two Pointers</strong>
              </h4>
            </button>
          </h4>
        </div>

        <div class="accordion-item op">
          <h4 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <h4>
                <strong>Graphs</strong>
              </h4>
            </button>
          </h4>
        </div>

        <div class="accordion-item op">
          <h4 class="accordion-header" id="dp">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=""
              aria-expanded="false"
              aria-controls=""
            >
              <h4>
                <strong>1D DP</strong>
              </h4>
            </button>
          </h4>
        </div>

        <div class="accordion-item op">
          <h4 class="accordion-header" id="swindow">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=""
              aria-expanded="false"
              aria-controls=""
            >
              <h4>
                <strong>Sliding Window</strong>
              </h4>
            </button>
          </h4>
        </div>

        <div class="accordion-item op">
          <h4 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              // type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              // aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <h4>
                <strong>Trees</strong>
              </h4>
            </button>
          </h4>
          {/* <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
          >
            <Trees />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
