import ArticleCard from "./ArticleCard"
export default function ArticleList({items}){
   return<>
 <div>
   <ul>
      {items.map((item)=>(
         <li key={item.objectID}>
            <ArticleCard url={item.url} title={item.title} points={item.points} author={item.author}/>
         </li>
      ))}
   </ul>
   </div>  
   </>
}