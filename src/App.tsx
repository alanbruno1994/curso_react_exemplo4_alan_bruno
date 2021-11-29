import { useRef, useState } from 'react';
import './App.css';
import Modal from './Modal';


function App() {
  const referenceInput=useRef<HTMLInputElement>(null)
  const [view,setView]=useState(false)
  

  return (
    <div className="App">
        <input ref={referenceInput}></input>
        <button onClick={_=>setView(!view)}>View or No</button>
        {view ? <Modal>{referenceInput && referenceInput.current? referenceInput.current.value : '' }</Modal>:''}
    </div>
  );
}

export default App;
