import styles from './Description.module.css';
import React from 'react';


function RecipeAuthor() {
    let authorLink = "https://sallysbakingaddiction.com/chocolate-chip-cookies/";
    let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/09/sally-mckenney-1-600x400.jpg";
    let authorName = "Sally";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Photo of Sally" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Sally's Baking Addiction</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
       return(
        <div>
            <div>
                <h1>Soft Chocolate Chip Cookies</h1>
                <p>The only chocolate chip cookie recipe you need!</p>
            </div>
            <RecipeAuthor />
          </div>
       );
    }
 }

 export default RecipeDescription;