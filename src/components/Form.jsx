import React,{useState} from 'react'

const Form = () => {
    const [store,setStore]=useState({
        name:'',
        department:'',
        rating:''
    });
    const [output,setOutput]=useState([]);
    const input1=(e)=>{
        // const name=e.target.name;
        // const value=e.target.value;
        // console.log(name,value)
        setStore({...store,[e.target.name]:[e.target.value]});
    }
    const submitted=(e)=>{
        e.preventDefault();
        setOutput([...output,{...store,id:output.length}])
    }
  return (
    <div>
         <h1 className='title'>employee feedback form</h1>
      <form className='form' onSubmit={submitted}> 
        <label>Name:</label>
        <input type="text" required className='input-field' value={store.name} name="name" onChange={input1}></input><br/><br/>
        <label>Department:</label>
        <input type="text" required className='input-field' value={store.department}  name="department" onChange={input1}></input><br/><br/>
        <label>Rating:</label>
        <input type="number" required className='input-field' name="rating" value={store.rating}  onChange={input1}></input><br/><br/>
        <button className='btn'>Submit</button>
      </form>
      <div className='lower-box'>
        { output.map(ele=>(<h4 className="wrapper">Name: {ele.name}|| Department: {ele.department}|| Rating:{ele.rating}</h4>))}
        
       
      </div>
    </div>
  )
}

export default Form