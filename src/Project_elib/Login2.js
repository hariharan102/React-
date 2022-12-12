import React,{useState} from 'react'

function Login2() {
    const[fn, setfn]= useState('');
    const[ln, setln]= useState('');
    const[email, setemail]= useState('');
    const[des, setdes]= useState('');
    const[ins, setins]= useState('');
    const[add, setadd]= useState('');
    const[zip, setzip]= useState('');
    const[mob, setmob]= useState('');
    const[Error,setError]= useState(false);
    const formHandler=(event)=>
    {
        event.preventDefault();
        if (fn.length==0 || ln.length==0 || email.length==0 || des.length==0 || ins.length==0 || add.length==0 || zip.length==0 || mob.length==0 )
        {
          setError(true);
        }
        if(fn && ln && email  && des && ins && add && zip && mob )
        {
        const loginObj={
            firstname:fn,
            lastname:ln,
            Email:email,
            designation:des,
            instiute:ins,
            address:add,
            zipcode:zip,
            mobile:mob,
        }
        console.log(loginObj);
        alert(JSON.stringify(loginObj));
      }
        
    }
  return (
    <>
<div >
   
    <form onSubmit={formHandler}>
    FirstName :<input id="user" type="text" value={fn} placeholder="First Name" onChange={(e)=>setfn(e.target.value)}/><br/>
    <div>
    {Error && fn.length==0 ?
    <label id="uerror" style={{color:'red'}}>Username is required</label>:""}
    </div>
    Lastname :<input id="psw" type="password"  value={ln} placeholder="Password" onChange={(e)=>setln(e.target.value)}/><br/>
    <div>
    {Error && ln.length==0 ?
    <label id="perror" style={{color:'red'}}>Password is required</label>:""}
    </div>
    Email :<input id="user" type="text" value={email} placeholder="User Name" onChange={(e)=>setemail(e.target.value)}/><br/>
<div>
{Error && email.length==0 ?
<label id="uerror" style={{color:'red'}}>Username is required</label>:""}
</div>
    Designation :<input id="user" type="text" value={des} placeholder="User Name" onChange={(e)=>setdes(e.target.value)}/><br/>
    <div>
    {Error && des.length==0 ?
    <label id="uerror" style={{color:'red'}}>Username is required</label>:""}
    </div>
    Username :<input id="user" type="text" value={ins} placeholder="User Name" onChange={(e)=>setins(e.target.value)}/><br/>
    <div>
    {Error && ins.length==0 ?
    <label id="uerror" style={{color:'red'}}>Username is required</label>:""}
    </div>
    Username :<input id="user" type="text" value={add} placeholder="User Name" onChange={(e)=>setadd(e.target.value)}/><br/>
    <div>
    {Error && add.length==0 ?
    <label id="uerror" style={{color:'red'}}>Username is required</label>:""}
    </div>
    Username :<input id="user" type="text" value={zip} placeholder="User Name" onChange={(e)=>setzip(e.target.value)}/><br/>
    <div>
    {Error && zip.length==0 ?
    <label id="uerror" style={{color:'red'}}>Username is required</label>:""}
    </div>
    Username :<input id="user" type="text" value={mob} placeholder="User Name" onChange={(e)=>setmob(e.target.value)}/><br/>
    <div>
    {Error && mob.length==0 ?
    <label id="uerror" style={{color:'red'}}>Username is required</label>:""}
    </div>
    <button id="login" type="submit">Login</button>
    </form>
    
</div>
    </>
  )
}

export default Login2