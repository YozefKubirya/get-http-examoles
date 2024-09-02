
import { Formik, Form, Field } from "formik";

export default function ArticleForm ({onSearch}){
   const handleSearch=(values,actions)=>{
onSearch(values.name)
actions.resetForm();
   }
return <>

<div>
   <Formik initialValues={{
      name:""
   }} onSubmit={handleSearch}>
      <Form>
<Field type="text" name="name"/>
<button type="submit">Search</button>
      </Form>
   </Formik>
</div>
</>
}