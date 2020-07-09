import React , {useState}from 'react'
import Detail from './Detail';

const List = ({recipe}) => {
     const {label,image,url,ingredients} = recipe.recipe;
     const[show,setShow] = useState(false);
    return (
        <div>
            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <a href={url} target="_blank" rel = "noopener noreferrer"> url</a>
           <button onClick={()=>setShow(!show)}>ingredients</button> 
          {show && <Detail ingredients={ingredients}/> }
        </div>
    );    
};

export default List ; 
