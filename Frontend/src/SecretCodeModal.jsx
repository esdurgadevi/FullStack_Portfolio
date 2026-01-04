import React, { useState } from "react";

const SecretCodeModal = ({ onVerify, onClose }) => {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    if (onVerify(code)) {
      onClose();
    } else {
      alert("Incorrect secret code!");
      setCode("");
    }
  };

  return (
    <div style={modalStyle}>
      <h3>Enter Secret Code</h3>
      <input
        type="password"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Secret code"
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleSubmit}>Verify</button>
        <button onClick={onClose} style={{ marginLeft: "5px" }}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  zIndex: 1000,
};

export default SecretCodeModal;
