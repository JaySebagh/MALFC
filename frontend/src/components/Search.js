import { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character.js';
import './sass/Search.sass';

const Search = () => {
    const [id, setId] = useState({});
    const [char, setChar] = useState([]);
    const [idList, setIdList] = useState(new Set())
console.log(char)
    // fetches character data using input field ID code
    const getChar = async (id) => {
        if(idList.has(id)){

        } else {
            try{
                const fetch = await axios.get(`https://api.jikan.moe/v4/characters/${id}`)
                setChar((char) => [...char, <Character char = {fetch.data.data} />])
                setIdList(prev => new Set(prev.add(id)))
            } catch(error){
                switch(error.response.data.status){
                    case 400:
                        console.log("bad request", 400);
                        break;
                    case 401:
                        console.log("unauthorized", 401);
                        break;
                    case 403:
                        console.log("forbidden", 403);
                        break;
                    case 404:
                        console.log("does not exist", 404);
                        break;
                    case 429:
                        console.log("too many requests", 429);
                        break;
                    case 500:
                        console.log("internal server error", 500);
                        break;
                    case 503:
                        console.log("service unavailable", 503);
                        break;
                    default:
                        console.log("default")
                }
            }
        }
    };

    // handles submitting API call using "enter" key instead of button
    useEffect(() => {
        const keyDownHandler = event => {
            if(event.key === "Enter"){
                event.preventDefault();
                document.getElementsByClassName("add")[0].click();
            }
        }
        
        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

// ~150k+ characters as of Oct 2022
    return(
        <div>
            <div className = "searchBar">
                <input
                    type = "number"
                    min = "0"
                    onKeyDown={(e) => (e.key === 'e' || e.key === '-' || e.key === "+" || e.key === ".") && e.preventDefault() }
                    placeholder = "char ID"
                    onChange = {e => setId(e.target.value)}
                />
                <button
                    type = "submit"
                    className = "add"
                    onClick = {() => getChar(id)}
                >
                    Add
                </button>
            </div>
            <div className = "charCollection">
                {char.map((char, index) => (
                    <div key = {index}>
                        {char}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search;