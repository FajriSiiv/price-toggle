import React, { useState } from "react";
import Switch from "react-switch";

export default function ToggleSwicth() {
  const [checked, setChecked] = useState(false);
  const handleChange = e => {
    setChecked(e);
  };
  return (
    <div>
      <label>
        <Switch
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleChange}
          checked={checked}
        />
      </label>
    </div>
  );
}
