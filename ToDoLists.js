import React from 'react';
const ToDoLists=(props)=>{
    return(
     <>
     <div>
         <button className="button1"
         onClick={()=>{
             props.onSelect(props.id);
         }}>press</button>
         <li className="list">{prop.text}</li>
     </div>
     </>
    )
}
export default ToDoLists;
