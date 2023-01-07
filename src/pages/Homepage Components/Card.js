import React from "react";
import { Link } from "react-router-dom";

const Card = ({ chitra, title, description, link }) => {
  return (
    <div>
      <div class="card my-2 mx-3 border border-0" style={{ width: "20rem", padding: "3%" }}>
        <Link to={link}>
          <img class="card-img-top" src={chitra} alt={title} />
          <div class="card-body " style={{ border: "none" }}>
            <h4 class="card-title">
              <Link to={link}>
                <strong
                  style={{
                    color: "black",
                    textDecoration: "underline",
                    textDecorationColor: "black",
                  }}
                >
                  {title}
                </strong>
              </Link>
            </h4>
            <Link to={link} class="btn btn-primary">
              Let's Solve
            </Link>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
