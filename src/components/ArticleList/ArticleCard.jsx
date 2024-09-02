export default function ArticleCard({title,url,points,author}){
   return <>
   <div>
    <a href={url}> <p >{title}</p></a>
    <p>Author: {author}</p>
    <p>{points}</p>
   </div>
   </>
}