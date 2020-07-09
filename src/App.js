//rafce
import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';
import CornerCases from './components/CornerCases';
const App = () => {
    //hooks
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    const APP_ID = "80da8ec7";
    const APP_KEY = "c2910b9870e6e2f082c0786cb03c3465";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async () => {
        if (query !== "") {
            const result = await Axios.get(url);
            if(!result.data.more){
                return setAlert('No food with such name !');
            }
            setRecipes(result.data.hits);
            console.log(result);
            setAlert("");
            setQuery("");
        }
        else{
            setAlert('Please Fill the form');
        }

    }
    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    }

    const onChange = (e) => {
        setQuery(e.target.value);
    }
    return (
        <div >
            <h1 style={{ textAlign: "center" }} >Food Searching App</h1>
            <form onSubmit={onSubmit}>
                { alert!=="" && <CornerCases alert={alert}/>}
                <input type="text" placeholder="Search Food " autoComplete="off" onChange={onChange} value={query} />
                <input type="submit" value="Search" />
            </form>
            <div>
                {recipes !== [] &&
                    recipes.map(recipe =>
                        <List key={uuidv4()} recipe={recipe} />
                    )}
            </div>
        </div>
    )
}

export default App
