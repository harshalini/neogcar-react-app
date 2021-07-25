import React from "react";
import { useState } from "react";
import "./styles.css";

const carsCol = {
  MarutiSuzuki: [
    { model: "Swift", ratings: "4.5/5" },
    { model: "Celerio", ratings: "3/5" },
    { model: "Alto 800", ratings: "4/5" }
  ],
  Tata: [
    { model: "Altros", ratings: "4.5/5" },
    { model: "Harrier", ratings: "4/5" },
    { model: "Safari", ratings: "4/5" }
  ],
  Hyundai: [
    { model: "i10", ratings: "3.5/5" },
    { model: "i20", ratings: "4/5" },
    { model: "Creta", ratings: "4.5/5" }
  ],
  Honda: [
    { model: "City", ratings: "4.6/5" },
    { model: "Amaze", ratings: "3.7/5" },
    { model: "Mobilio", ratings: "4/5" }
  ]
};
var lovedCompanies = Object.keys(carsCol);

export default function App() {
  const [selectedCompany, setCompany] = useState("Tata");
  function companyClickHandler(company) {
    setCompany(company);
  }
  //const [list, setlist] = useState("");
  //var list= carsCol[selectedCompany];

  return (
    <div className="App">
      <div className="upper">
        <h1
          style={{
            marginBottom: "2rem",
            marginTop: "0px",
            fontSize: "3rem"
          }}
        >
          PeeP PeeP 📯
        </h1>
        <h2>Checkout the most loved cars of India!</h2>
        <h3> Select any car company shown below</h3>

        {lovedCompanies.map((company) => (
          <button
            onClick={() => companyClickHandler(company)}
            style={{
              cursor: "pointer",
              background: "#FFBCBC",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {company}
          </button>
        ))}
        <hr
          style={{
            width: "80%",
            marginBottom: "3rem"
          }}
        />
      </div>

      <div className="lower">
        <ul>
          {carsCol[selectedCompany].map((car) => (
            <li
              key={car.model}
              style={{
                padding: "0.7rem",

                border: "2px solid #FF616D",
                //float: "left",
                width: "60%",
                height: "3rem",
                listStyle: "none",
                margin: "1rem auto",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "large", fontWeight: "bold" }}>
                {" "}
                {car.model}
              </div>
              <div> {car.ratings}</div>
            </li>
          ))}
        </ul>
      </div>

      <footer
        className="footer"
        style={{
          marginTop: "1rem"
        }}
      >
        <p> You can find the full reviews of cars on our YouTube channel!</p>
      </footer>
    </div>
  );
}
