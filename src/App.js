import {  useState } from 'react';
import './App.css';

import Profil from './Profil';
function App() {
const [show,setShow]=useState(true)

const handel=()=>{
  setShow( !show)
}


  return (
    <div className="App">

<button  onClick={()=>handel()}    >   {show? 'hidden' : 'show'} </button>


{
    show &&  <Profil    />  
 
}
  
    </div>
  );
}

export default App;

