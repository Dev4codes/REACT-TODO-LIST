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
    if (!input) {
    } else {
      setList([...list, input]);
      setInput('');
    }
  };
  const deleteitem = (id) => {
    const updatedlist = list.filter((ele, ind) => {
      return ind !== id;
    });
    setList(updatedlist);
    console.log(updatedlist);
  };
  const edititem = (id) => {
    const editlist = list.filter((ele, ind) => {
      return ind == id;
    });
    const updatedlist = list.filter((ele, ind) => {
      return ind !== id;
    });
    setList(updatedlist);
    setInput(editlist)
    
  };


 
  

  const delall = () => {
    setList([]);
    setInput("");
  };

  return (
    <>
      <div className="main-cont">
      <div className="heading"> <div className="headingtxt"> Digi-Note</div> </div>
        <div className="inputnbutton">
          <input
            type="text"
            className="inputbox" placeholder="Add your Notes Here"
            value={input}
            onChange={text}
          />
          <button className="plus" onClick={additem}>
            +
          </button>
        </div>

        <div className="display">
         
          <div className="data">
            {list.map((itemlist, ind) => {
              return (
                <>
                  <div className="rendereddata">
                               <button className="minus" onClick={() => deleteitem(ind)}>Delete </button>
                             
                               
                    <div className="rendereditem">{itemlist}</div>
                    <div ><button className="edit" onClick={()=>edititem(ind)}>edit </button >  </div>
                   
                     
                    
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <button className="deleteall" onClick={delall}>
          Delete All{' '}
        </button>
      </div>
    </>
  );
}
