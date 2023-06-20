// import React from 'react';
// import { useState } from 'react';
// export default function Simpletodo() {
//   const [data, setData] = useState('welcome');
//   const [list, setlist] = useState([]);
//   function addActivity() {
//     console.log(list);
//     setlist((list) => {
//       const updatedlist = [...list, data];
//       return updatedlist;
//     });
//   }

//   return (
//     <>
//       <h1>to do app</h1>
//       <input
//         type="text"
//         value={data}
//         size="30"
//         onChange={(e) => setData(e.target.value)}
//       />
//       <button className="todobtn" onClick={addActivity}>
//         add data
//       </button>
//       <h3>here is you data</h3>
//       <h3>
//         {list.map((m, i) => {
//           return (
//             <ul>
//               <li key={i}>{m}</li>
//             </ul>
//           );
//         })}
//       </h3>
//     </>
//   );
// }
