import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [id, setId] = useState("");
    const [char, setChar] = useState([]);

    const handleInput = () => {
        console.log(id);
    };

    const getChar = async (id) => {
        try{
            const fetch = await axios.get(`https://api.jikan.moe/v4/characters/${id}`)
            setChar(fetch.data.data);
        } catch(error){
            console.log(error.response.data)
        }
    };

    // useEffect(getChar, []);

    console.log(char)
    // useEffect(() => {
    //     (async () => {
    //         const char = await axios.get(
    //             "https://api.jikan.moe/v4/characters/2727"
    //         );
    //         setChar(char.data.data);
    //     })();
    // }, []);

// ~150k+ characters
    return(
        <div>
            <input
                type = "number"
                min = "0"
                onKeyDown={(e) => (e.key === 'e' || e.key === '-' || e.key === "+" || e.key === ".") && e.preventDefault() }
                placeholder = "char ID"
                onChange = {e => setId(e.target.value)}
            />
            <button onClick = {() => getChar(id)}>Add</button>
        </div>
    )
}

export default Search;