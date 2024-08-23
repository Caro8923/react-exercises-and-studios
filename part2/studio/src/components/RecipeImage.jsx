import recipedata from "./recipe.json";

function RecipeImage() {
  let recipeImage = <img src="https://thecozycook.com/wp-content/uploads/2021/10/Stovetop-Mac-and-Cheese-2.jpg" alt ="Stovetop Mac and Cheese" className="recipeImage"></img>
   return <div>{recipeImage}</div>
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 