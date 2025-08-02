import { useState } from "react";

export default function Form() {
  const [showMessage, setShowMessage] = useState(false);

  const [name, setName] = useState("");

  const handleSubmit = () => {
    setShowMessage(true);
    setName(name); // TODO:
  };

  return (
    <>
      <h2>Enter your name:</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setShowMessage(false);
        }}
        placeholder="Type your name"
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <button
        onClick={handleSubmit}
        style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}
      >
        Submit
      </button>

      {showMessage && (
        <h3 style={{ marginTop: "20px", color: "green" }}>
          <div>🎉 {name}</div>
        </h3>
      )}
    </>
  );
}
