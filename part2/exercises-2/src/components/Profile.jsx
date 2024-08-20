import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

let listItem = oceans.map(oceans=>
   <div key={oceans.id} className={`${oceans.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <img src={oceans.image} alt={oceans.name} className="img"/>
      <h1>{oceans.name}</h1>
         <h3>Fun Facts:</h3>
            <ul>
               <li>{oceans.fact1}</li>
               <li>{oceans.fact2}</li>
               <li>{oceans.fact3}</li>
            </ul>
            <Button /> 
   </div>
   
)

function Profile()
{
   return (
         <ul>
            {listItem}
         </ul>
   );
}

export default Profile;