import React, { useState } from 'react'
import Topbar from './Topbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios, { Axios } from 'axios';
import { APL_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
function Create() {

  let navigate=useNavigate()

 


  let formik = useFormik({
    initialValues:{
      title:'',
      author:'',
      number:'',
      date:''

    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      author:Yup.string().required('Name is required')
      .max(20, 'Name can not exceed 20 characters')
      .min(3, 'Name can not be shorter than 3 letters'),
      number: Yup.number().required('ISB Number is required'),
      date: Yup.date().required('Publication Date is required'),
    }),
    onSubmit:async(value)=>{
      try {
       
        let res = await axios.post(APL_URL,value)
        if(res.status===201){
          navigate('/')
         
        }
      } catch (error) {
        
      }
    }
  })
 
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

export default Create
