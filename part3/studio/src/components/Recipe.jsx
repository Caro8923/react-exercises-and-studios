import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://sallysbakingaddiction.com/about/";
   let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/09/sally-mckenney-1-600x400.jpg";
   let authorName = "Sally";

   return (
      <div>
         <img src={authorPhoto} alt = "Photo of Sally" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["flour", "butter", "sugar", "eggs", "chocolate chips"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p>Delicious Double Chocolate Chip Cookies</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://sallysbakingaddiction.com/wp-content/uploads/2022/07/double-chocolate-chip-cookies-recipe-1024x1536.jpg" alt="Double Chocolate Chip Cookies" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
