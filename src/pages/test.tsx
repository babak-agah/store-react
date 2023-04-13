import { Button, TextField } from "@mui/material";
import axios from "axios";
import { FormEventHandler, useState } from "react";

const test = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e);
    console.log(username, password);

    // fetch("https:locahost:3000/api/register/", {
    //   method: "POST",
    //   body: JSON.stringify({ username, password }),
    //   headers: {
    //     "Content-Type": "aplication/json",
    //   },
    // })
    //   .then((res) => {})
    //   .catch((err) => {});
    try {
      const response = await fetch("https:locahost:3000/api/register/", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "aplication/json",
        },
      });
      alert("you are registerd!");
    } catch (error) {
      alert("there is as problem");
    }

    return;
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        type="text"
      />

      <br />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name={"password"}
        placeholder="password"
        type="text"
      />
      <br />
      <Button
        //   onClick={onSubmit}
        type={"submit"}
      >
        login
      </Button>
    </form>
  );
};

export default test;
