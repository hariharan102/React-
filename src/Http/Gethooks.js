import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Gethooks() {
  const[post,setpost]=useState([]);
  useEffect(()=>
  {
    axios.get("kar.json")
      .then(e=>{
        setpost(e.data)
        console.log(e.data)
      })
  })
  return (
    <div>
    GetEx
    <center>
    <table classname="table"> 
    <tr>
    <th>ID</th>
    <th>Title</th>
    <th>User id</th>
    </tr>
    {post.map((pos)=> 
      <tr>
      <td>{pos.id}</td>
      <td>{pos.title}</td>
      <td>{pos.userId}</td>
      </tr>
      )}
      </table>
      </center>
      </div>
    
  )
}

export default Gethooks