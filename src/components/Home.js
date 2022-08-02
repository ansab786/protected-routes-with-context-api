import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function Home() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="body">
        {data &&
          data.map((value, id) => {
            return (
              <div className="data" key={id}>
                <img className="img" src={value.image} alt="imagee" />
                <p>{value.title}</p>
                <h1>Price: {value.price}</h1>
                <button>Add to cart</button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;
