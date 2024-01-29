import React, { useEffect, useState } from 'react'
import Topbar from './Topbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { APL_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Edit() {
  let params = useParams()//this will return a object
 let [initialValues,setValues] = useState({
   title:'',
   author:'',
  number:'',
   date:''
 })


 let navigate = useNavigate()

 const getUserData = async()=>{
   let {id} = params
   try {
     let res = await axios.get(`${APL_URL}/${id}`)
     if(res.status===200)
     {
       setValues({
         title:res.data.title,
         author:res.data.author,
         number:res.data.number,
         date:res.data.date
       })
     }
 } catch (error) {
     console.log(error)
 }
 }

 let formik = useFormik({
   initialValues:initialValues,
   validationSchema:Yup.object({
    title:Yup.string().required('Title is required'),
     author:Yup.string().required('Name is required').max(20,'Name can not exceed 20 characters').min(3,'Name can not be shorter than 3 leters'),
     number:Yup.number().required('ISBN is required'),
     date:Yup.date().required('Publication date is required')
   }),
   enableReinitialize:true,
   onSubmit:async (values)=>{
     let {id} = params
     values.id = id
   try {
       let res = await axios.put(`${APL_URL}/${id}`,values)
       if(res.status===200)
         navigate('/dashboard')
   } catch (error) {
     console.log(error)
   }
 }})



 useEffect(()=>{
   getUserData()
 },[])
  return <>
  <Topbar/>
<div className='container-fulid'>
<Form onSubmit={formik.handleSubmit}>
     
     <Form.Group className="mb-3">
           <Form.Label>Title</Form.Label>
           <Form.Control type="text" placeholder="book name" id='title' title='title'  onChange={formik.handleChange} value={formik.values.title}onBlur={formik.handleBlur} />
           {formik.touched.title && formik.errors.title ? ( <div style={{color:"red"}}>{formik.errors.title}</div> ) : null}
   
         </Form.Group>
   
         <Form.Group className="mb-3">
           <Form.Label>Author</Form.Label>
           <Form.Control type="text" placeholder="author name" id='author' title='author'  onChange={formik.handleChange} value={formik.values.author}  onBlur={formik.handleBlur} />
           {formik.touched.author && formik.errors.author ? ( <div style={{color:"red"}}>{formik.errors.author}</div> ) : null}
   
         </Form.Group>
   
         <Form.Group className="mb-3">
           <Form.Label>ISBN Number</Form.Label>
           <Form.Control type="number" placeholder="Enter ISBN Number" id='number' title='number'  onChange={formik.handleChange} value={formik.values.number}onBlur={formik.handleBlur}/>
           {formik.touched.number && formik.errors.number ? ( <div style={{color:"red"}}>{formik.errors.number}</div> ) : null}
   
         </Form.Group>
   
         <Form.Group className="mb-3" >
           <Form.Label>PUblication Date</Form.Label>
           <Form.Control type="number" placeholder="Date" id='date' title='date'  onChange={formik.handleChange} value={formik.values.date}onBlur={formik.handleBlur} />
           {formik.touched.date && formik.errors.date ? ( <div style={{color:"red"}}>{formik.errors.date}</div> ) : null}
   
         </Form.Group>
        
         <Button variant="primary" type='submit'>
           Submit
         </Button>
       </Form>
    </div>
    </>
}

export default Edit;
