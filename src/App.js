import './index.css'
import Horizontal from './components/Horizontal';
import Form from './components/Form'

function App() {
  // const [names,setNames]=useState("");
  // const[department,setDepartment]=useState("");
  // const[rating,setRating]=useState("")
  // const[val,setVal]=useState("")
  // const submitted=(e)=>{
  //   e.preventDefault();
  //   setVal(names+" "+department+" "+rating);
  // }
  return (
    <div className='main'>
     <Form/>
      {/* <Horizontal/> */}
      {/* <div className='lower-box'>
        <h3>{names+" "+department+" "+rating}</h3>
      </div> */}
   
    </div>
  );
}

export default App;
