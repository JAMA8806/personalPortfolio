'use client'
import * as React from "react";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { ThemeContext } from "../../../src/context/ThemeContext";
import { useContext } from "react";

export default function Switche() {
  const {setTheme} = useContext(ThemeContext)
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);

    if (!checked) {
      setTheme('theme-dark')  
    }else{
      setTheme('theme-light')
    }
    
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
