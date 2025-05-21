import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const renderData = (
    <>
      <p>
        authebtakldglka akjdglkajdsglka akldjglkasd jg' ajkdg a akdhalks dgasgj
      </p>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </>
  );
  const alt = <p>Please come back later </p>;
  return (
    <main className="menu">
      <h2> our Menu </h2>

      {pizzas.length > 0 ? renderData : alt}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (props.pizzaObj.soldOut)
  //   return (
  //     <li className="pizza">
  //       <h2>{props.pizzaObj.name}</h2>
  //       <p> {props.pizzaObj.ingredients}</p>
  //       <img
  //         className="Pizza"
  //         src={props.pizzaObj.photoName}
  //         alt={props.name}
  //       />
  //       <span> SOLD OUT</span>
  //     </li>
  //   );

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <h2>{pizzaObj.name}</h2>
      <p> {pizzaObj.ingredients}</p>
      <img className="Pizza" src={pizzaObj.photoName} alt={pizzaObj.name} />
      <span className="price">
         {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}
      </span>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(hour);

  // const local_time = new Date().toLocaleTimeString("en-GB", {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit",
  // });

  return (
    <footer className="footer">
      {
        <div>
          {isOpen ? (
            <Order openHour={openHour} closeHour={closeHour} />
          ) : (
            <p>
              we are closed We are happy to welocme between {openHour} and
              {closeHour}
              {closeHour}.
            </p>
          )}
        </div>
      }
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>we're open until {props.closeHour}:00. Come visit or order online </p>
      <button className="btn">order Now</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
