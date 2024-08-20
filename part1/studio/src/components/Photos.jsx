import styles from './Description.module.css';

export default function RecipePhoto() {
    let photo = "https://sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1-1024x1536.jpg";
    
    return (
        <img src={photo} alt="Chocolate Chip Cookies" className = {styles.imageUpdates} />
    )
}