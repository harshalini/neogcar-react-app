import React from "react";
import { useState } from "react";
import "./styles.css";

const carsCol = {
  MarutiSuzuki: [
    {
      model: "Swift",
      ratings: "3.5/5",
      description: `Price:
  ₹ 5.81 Lakh onwards
  Mileage: 23.2 to 23.76 kmpl
  Engine: 1197 cc`
    },
    {
      model: "Celerio",
      ratings: "4.4/5",
      description: `Price:
      ₹ 4.65 Lakh onwards
      Mileage: 21.63 to 30.47 km/kg
      Engine: 998 cc`
    },
    {
      model: "Alto 800",
      ratings: "4.5/5",
      description: `Price:
      ₹ 3.00 Lakh onwards
      Mileage: 22.05 to 31.59 km/kg
      Engine: 796 cc`
    }
  ],
  Tata: [
    {
      model: "Altros",
      ratings: "4.7/5",
      description: `Price: ₹ 5.84 Lakh onwards
      Mileage: 19.05 to 25.11 kmpl Engine: 1199 to 1497 cc`
    },
    {
      model: "Harrier",
      ratings: "4/5",
      description: `Price: ₹ 14.39 Lakh onwards
    Mileage: 14.63 to 16.35 kmpl
    Engine: 1956 cc`
    },
    {
      model: "Safari",
      ratings: "4/5",
      description: `Price
     ₹ 14.99 Lakh onwards
     Mileage: 14.08 to 16.14 kmpl
     Engine: 1956 cc`
    }
  ],
  Hyundai: [
    {
      model: "Grand i10 Nios",
      ratings: "3.5/5",
      description: `Price:
    ₹ 5.28 Lakh onwards
    Mileage: 18.9 to 25 kmpl
    Engine: 998 to 1197 cc`
    },
    {
      model: "i20",
      ratings: "4/5",
      description: `Price:
    ₹ 6.91 Lakh onwards
    Mileage: 19.65 to 25.2 kmpl
    Engine
    998 to 1493 cc`
    },
    {
      model: "Creta",
      ratings: "4.5/5",
      description: `Price:
     ₹ 10.15 Lakh onwards
     Mileage: 17 to 21 kmpl
     Engine: 1353 to 1497 cc`
    }
  ],
  Honda: [
    {
      model: "City",
      ratings: "4.6/5",
      description: `Price:
     ₹ 11.19 Lakh onwards
     Mileage: 17.8 to 24.1 kmpl
     Engine: 1498 cc`
    },
    {
      model: "Amaze",
      ratings: "3.7/5",
      description: `Price:
     ₹ 6.34 Lakh onwards
     Mileage: 18.3 to 24.7 kmpl
     Engine: 1199 to 1498 cc`
    },
    {
      model: "Jazz",
      ratings: "4/5",
      description: `Price: Rs.7.65 Lakh onwards
     Mileage: 16.6 - 17.1 kmpl
     Engine: 1199 cc`
    }
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
                backgroundColor: "#FAAD80",
                padding: "0.7rem",
                paddingBottom: "3.5rem",

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
              <div> {car.description}</div>
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
