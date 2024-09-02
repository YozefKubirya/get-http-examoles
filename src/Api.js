import axios from "axios";
export const fetchUser= async (username)=>{
   const response =await axios.get(`https://api.github.com/users/${username}`); 
   return response.data;
}
axios.defaults.baseURL=`http://hn.algolia.com/api/v1/`;

export const fetchArticles=async (topic,page)=>{
   const response =await axios.get(`search`, {params:{
      query: topic,
      page,
      hitsPerPage: 5,
   }});
   return {
      articles: response.data.hits,
      totalPages: response.data.nbPages,
    }};