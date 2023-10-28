import React from "react";
import "./style.css";
import { useState } from "react";
import Todoapp from "./Todoapp";
import Simpletodo from "./Simpletodo";
import Title from "./Title";

export default function App() {
  return (
    <div>
      <Title />
      <Todoapp />
      {/* <Simpletodo /> */}
    </div>
  );
}
