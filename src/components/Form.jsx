import {useState} from 'react';
import Values from 'values.js';

const Form = ({setList}) => {
 const [color, setColor] = useState('#05B0FF');
 const [error, setError] = useState(false);

 const handleGenerator = event => {
  event.preventDefault();
  
  try {
   let colors = new Values(color).all(5);
   setList(colors);
   setError(false);
  } catch(error) {
   console.log(error);
   setError(true);
  }
 }

 return (
  <div className='form-colors'>
   <h1> Color palette Generator </h1>
   <form onSubmit={handleGenerator}>
    <input type='text' placeholder='#FFFFFF/White' onChange= {event => setColor(event.target.value)}/>
    <input type='submit' value='Generate' autoFocus/>
   </form>
   {error ? <p className='error'> This color isn't exists ;-; </p> : ''}
  </div>
 )
}

export default Form;