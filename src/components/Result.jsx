import { useState } from "react";

export default function Result() {
  const [name, setName] = useState("Alice"); // TODO:

  return (
    <div style={{ marginTop: "20px", color: "red", fontSize: "50px" }}>
      {name}
    </div>
  );
}
