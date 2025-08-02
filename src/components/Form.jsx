import { useContext, useState } from "react";
import { UserContext } from "./userContext";

export default function Form() {
  const { name, updateNameGlobally } = useContext(UserContext);

  return (
    <>
      <h2>Enter your name:</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          updateNameGlobally(e.target.value);
        }}
        placeholder="Type your name"
        style={{ padding: "8px", fontSize: "16px" }}
      />
    </>
  );
}
