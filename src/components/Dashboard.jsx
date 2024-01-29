import React,{useState,useEffect} from 'react'
import Topbar from './Topbar'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { APL_URL } from '../App';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';  

function Dashboard () {

  let navigate =useNavigate()

let [data,setData]=useState([]);


const handleDelete = async(id)=>{

  try {
    let res = await axios.delete(`${APL_URL}/${id}`)
    if(res.status===200){
      getData()
    }
    
  } catch (error) {
    
  }
}

const getData = async()=>{
  try {
let res = await axios.get(APL_URL)
console.log(res);
if(res.status===200){
  setData(res.data)
}
} 
catch (error) {

}
}

useEffect(()=>{
getData()
},[])

  return<>
  <Topbar/>
  <div className='container-fulid'>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Autor</th>
          <th>ISBN Number</th>
          <th>PUblication Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        data.map((e,i)=>{

          return<tr key={i}>
               <td>{i+1}</td>
               <td>{e.title}</td>
               <td>
                {e.author}
               </td>
               <td>
              {e.number}
               </td>
           
               <td>{e.date}</td>
              
               <td>
                <Button variant='info'  onClick={()=>navigate(`/edit${e.id}`)}><b>Edit</b></Button>
             &nbsp;
                <Button variant='danger'onClick={()=>handleDelete(e.id)}>Delete</Button>
               </td>
          </tr>

        })
      } 
        </tbody>
        </Table>
  </div>



  
 

  </>
}

export default Dashboard
