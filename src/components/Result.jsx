import { useContext } from "react";
import { UserContext } from "./userContext";

export default function Result() {
  const { name } = useContext(UserContext);

  return (
    <div style={{ marginTop: "20px", color: "red", fontSize: "50px" }}>
      {name}
    </div>
  );
}
