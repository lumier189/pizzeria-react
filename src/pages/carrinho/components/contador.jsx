import React, { useState } from "react";

export default function Contador() {
  const [val, setVal] = useState(0);

  return (
    <div>
      <input
        type="text"
        pattern="[0-9]*"
        value={val}        
        onChange={(e) =>
          setVal((v) => (e.target.validity.valid ? e.target.value : v))
        }
      />
    </div>
  );
}