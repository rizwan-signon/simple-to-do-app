import React from 'react';
import { useState } from 'react';
export default function Todoapp() {
  const [activity, setActivity] = useState('add your activity');
  const [list, setList] = useState([]);
  // here is function to add your activity
  const addActivity = () => {
    // setList(...list, activity);
    // console.log(list);
    setList((list) => {
      const updatedList = [...list, activity];
      console.log(updatedList);
      setActivity('');
      return updatedList;
    });
  };

  return (
    <div className="main_app">
      <h1> Simple To Do app</h1>
      <input
        type="text"
        size="40"
        className="todoinput"
        value={activity}
        placeholder={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button className="todoadd" onClick={addActivity}>
        Add
      </button>
      <h3>keep track of your daily activities </h3>
      {list.map((listdata, i) => {
        return (
          <>
            <p key={i} className="para">
              {i + 1}.{listdata}
            </p>
          </>
        );
      })}
    </div>
  );
}
