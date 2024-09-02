export default function ItemCard({avatar,bio,location}){
   console.log('ItemCard props:', { bio, avatar, location })
   return <>
<div>
   <img src={avatar} alt="avatar" width="250px"/>
   <p>{bio}</p>
   <p>{location}</p>
</div>
   </>
}