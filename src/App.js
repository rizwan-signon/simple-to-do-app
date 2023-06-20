import React from 'react';
import './style.css';
import { useState } from 'react';
import Todoapp from './Todoapp';
import Simpletodo from './Simpletodo';

export default function App() {
  return (
    <div>
      <Todoapp />
      {/* <Simpletodo /> */}
    </div>
  );
}
