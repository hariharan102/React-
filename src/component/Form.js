import React, { useState } from 'react'

function Form() {
    const [username,setusername]=useState('');
    const [pass,setpass]=useState('');
    const [error,seterror]=useState(false);
    const formHandler=(e)=>
    {
        e.preventDefault();
        if(username.length==0&&pass.length==0)
        {
seterror(true)
        }
        if(username && pass )
        {
        const loginobj={
            name:username,
            pwd:pass
        }
        console.log(loginobj)

alert(JSON.stringify(loginobj))
    }
  }

  return (
    <div>
    <form onSubmit={formHandler}>
    username : <input type="text" value={username}placeholder="User Name"onChange={(e=>setusername(e.target.value))}></input>
    <div>
    {error && pass.length==0?
    <lable >
    pass iis requried</lable>:""}
    </div>
    Pass :<input type="password" value= {pass} placeholder="pass"onChange={(e=>setpass(e.target.value))}></input>
    <div>
    {error && pass.length==0?
    <lable >
    pass iis requried</lable>:""}
    </div>
    <div>
    {error && pass.length==0?
    <lable >
    pass iis requried</lable>:""}
    </div>
    <div>
    {username="admin" && pass.length!=0?
    <lable >
    pass iis requried</lable>:""}
    </div>
    <button button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Form