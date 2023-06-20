import React from 'react';
export default function (props) {
  return (
    <div>
      <button onClick={props.playing}>play</button>
      <button onClick={props.uplouding}>uploud</button>
    </div>
  );
}
