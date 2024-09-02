import ItemCard from "./ItemCard"
 export default function ItemList({user}){
   console.log("Items:", user);
   return <>
   <div>
      <ul>
      <li key={user.id}>
<ItemCard bio={user.bio} avatar={user.avatar_url} location={user.location}/>
         </li>
      </ul>
   </div>
   </>
}