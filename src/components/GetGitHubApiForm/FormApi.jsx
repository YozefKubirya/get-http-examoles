import { fetchUser } from "../../Api";
import { Formik,Form ,Field} from "formik";

export default function FormApi ({setUser,setLoading, setError}){
const handleSearch = async (values,actions)=>{
   try{
   setLoading(true); 
   setUser(null);
   setError(false);
   const setteledUser=await fetchUser(values.name)   
   setUser(setteledUser);  
   actions.resetForm()}
   catch(error){
   setError(true)
   console.log(error)
   }finally{
      setLoading(false);
   };
     
}
   return<>
   <Formik initialValues={{
name:""
   }} onSubmit={handleSearch}>
      <Form>
         <Field type="text" name="name"></Field>
         <button type="submit">
            submit
         </button>
      </Form>
   </Formik>
   </>
}