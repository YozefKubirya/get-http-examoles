import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormApi from './components/GetGitHubApiForm/FormApi'
import ItemList from './components/ItemList/ItemList'
import ArticleForm from './components/ArticleForm/ArticleForm'
import { fetchArticles } from './Api'
import ArticleList from './components/ArticleList/ArticleList'
function App() {
  const [count, setCount] = useState(0)
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const [articles,setArticles]=useState([]);
  const [topic,setTopic]=useState("");
  const [page,setPage]=useState(1)
  const [totalPages,setTotalPages]=useState(1000)

  useEffect(()=>{
    if(topic===""){
      return;
    }

    async function getFetch  (){
     try{
      setLoading(true);
      setError(false);
      const fetchedData= await fetchArticles(topic,page);
      setArticles((prevFetchedData)=>[...prevFetchedData,...fetchedData.articles]);
      setTotalPages(fetchedData.totalPages)
     }catch{
    setError(true)
     }finally{
    setLoading(false)
     }
          }

getFetch();
    console.log(topic,page)
  },[topic,page])

  const searchArticle=(newTopic)=>{
  
    setPage(1)
    setTopic(newTopic);
    setArticles([])
  };

  const handlePage=()=>{
    setPage(page+1);
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
{/* <FormApi setUser={setUser} setLoading={setLoading} setError={setError}/>
{loading&&<p>Please wait content is Loading....</p>}
{error&& <p>Oppps some error happend.....</p>}
{user && <ItemList user={user}/>} */}
<ArticleForm onSearch={searchArticle}/>

{articles.length > 0 && <ArticleList items={articles}/>}

{page >= totalPages && <b>END OF COLLECTION!!!!</b>} 

{loading&&<p>Please wait content is Loading....</p>}
{error&& <p>Oppps some error happend.....</p>}

{articles.length >0 && !loading && <button type='button' onClick={handlePage}>Load More </button>}
    </>
  )
}

export default App
