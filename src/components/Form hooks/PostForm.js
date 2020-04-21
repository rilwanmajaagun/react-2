import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";

const PostForm = () => {
  const [state, setstate] = useState({
    name: "",
    author: "",
    domain: "",
    date: new Date()
  });

  const onSubmit = (state) => {
    // ( using axios method to post data to an api)

    Axios.post("/api/v2/blog/", state)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });

    //(using fetch method to post data to an api)

    // const url = "/api/v2/blog/";
    // const data = state;
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   mode: "cors",
    //   body: JSON.stringify(state)
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   })
    //   .catch((err) => {
    //     console.log("Error:", err.message);
    //   });
  };
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" name="name" ref={register} />
      <input type="text" placeholder="author" name="author" ref={register} />
      <input type="text" placeholder="domain" name="domain" ref={register} />
      {/* <input type="text" placeholder="date" name="date" value = {new Date()} ref={register} /> */}

      <button type="submit">submit</button>
    </form>
  );
};

export default PostForm;
