import { useState } from 'react';

const SingleColor = ({hexColor}) => {

 const [copy, setCopy] = useState(false);

 const handleCopy = (color) => () => {
  const newColor = `#${color}`;
  navigator.clipboard.writeText(newColor);
  setCopy(true);
  setTimeout(() => {
   setCopy(false);
  }, 2500)
 }

 return (
  <div className='single-card' style={{ backgroundColor: `#${hexColor}` }} onClick={handleCopy((hexColor).toUpperCase())}>
   <div className='content'>
    <p> #{(hexColor).toUpperCase()} </p>
    <button>
     <img src='https://cdn-icons-png.flaticon.com/512/8046/8046298.png' alt='copy'/>
    </button>
   </div>
   {copy ? <p className='copy-alert'> Copied to clipboard! </p> : ''}
  </div>
 );
}

export default SingleColor;