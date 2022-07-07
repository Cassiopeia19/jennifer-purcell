import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
import { Link } from "react-router-dom";

export default function Info() {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <img
                src={aboutBcg}
                className="img-fluid img-thumbnail"
                alt="about me"
                style={{
                  background: "var(--darkGrey)",
                  height: "600px",
                  width: "600px",
                  borderRadius: "25px",
                  borderStyle: "outset"
                }}
              />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <Title title="about me" />
              <p className="text-lead text-muted my-3">
                * UMSL Alumni, with Bachelor's of Science in Information
                Systems. <br />
                * I'm currently pursuing my Master's degree in Information Systems and 
                Technology, with focus on information security & cybersecurity. <br />
                * In my spare time, I enjoy crafting, gardeninig, and vacationing in the Caribbean. <br />
                * I strive to be the very best of what I can be.
              </p>
              <Link to="/languages" className="main-link">
                more info
              </Link>
              {/* <button
                className="main-link"
                type="button"
                style={{ marginTop: "2rem" }}
              >
                more info
              </button> */}
            </div>
          </div>
        </div>
      </section>
    );
}
