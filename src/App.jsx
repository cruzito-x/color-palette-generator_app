import {useState} from 'react';
import Values from 'values.js';
import Form from './components/Form';
import DisplayColors from './components/DisplayColors';
import './App.css';

function App() {
 const [list, setList] = useState(new Values('#05B0FF').all(5));

 console.log(list);

 return (
  <div className='App'>
   <Form setList={setList}/>
   <DisplayColors list={list}/>
  </div>
 )
}

export default App;