import { useState } from 'react';

export default function BoardAssignment () {

   const [ boardName, setName ] = useState("No boards yet!");

   const boards = [
      {
         label: "Cookies", 
         value: "cookies"
      },
      {
         label: "Recipes",
         value: "recipes"
      }, 
      {
         label: "Desserts",
         value: "desserts"
      }];

   let boardOptions = boards.map((board, index) => {
      return <option key={index} value={board.value}>{board.value}</option>
   });

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boardOptions}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
