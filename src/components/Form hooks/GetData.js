import React, { useEffect, useState } from "react";
import Axios from "axios";

const GetData = () => {
  const url = "/api/v2/blog";
  const [state, setState] = useState({ data: [] });
  useEffect(() => {
    fetch(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => (setState((state.data = json)), console.log(state.data)));
  }, []);
  const result = state.data.map((items, index) => {
    return (
      <div key={index}>
        <div>name: {items.name}</div>
        <div>author: {items.author}</div>
        <div>domain: {items.domain}</div>
        <div>date: {items.date}</div>
        <br />
        <br />
      </div>
    );
  });
  if (state.data.length == 0) {
    return <div> loading</div>;
  } else {
    return <div>{result}</div>;
  }
};

export default GetData;
