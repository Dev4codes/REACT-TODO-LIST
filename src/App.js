import React, { useState } from 'react';
import './style.css';
import './mystyle.css';

export default function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  var key;
  const text = (e) => {
    setInput(e.target.value);
  };

  const additem = () => { 
    if(!input){

    }
    else{
      setList([...list,input])
      setInput('');
    }
    
  };
 const  deleteitem=(id)=>{
 
   const updatedlist=list.filter((ele,ind)=>{
     return ind !==id;

   })
   setList(updatedlist)
   console.log(updatedlist)
 }
  
const delall=()=>{
  setList([]);
}
  

  return (
    <>
      <div className="main-cont">
        <div className="inputnbutton">
          <input
            type="text"
            className="inputbox"
            value={input}
            onChange={text}
          />
          <button className="plus" onClick={additem}>
            +
          </button>
        </div>

        <div className="display">
          <div className="data">
            {list.map((itemlist,ind) => {
              return (
                <>
                  
                 
                  <div className="rendereddata">
                    <div className="minus" onClick={()=>deleteitem(ind)}>&#8722;&#8722;</div> {itemlist}
                    <br />
                  </div>
                </>
              );
            })}
          </div>
         
        </div>
        <button className="deleteall" onClick={delall}>Delete All </button>
      </div>
    </>
  );
}
