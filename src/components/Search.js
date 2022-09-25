import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [id, setId] = useState("");
    const [char, setChar] = useState([]);

    const handleInput = () => {
        console.log(id);
    };

    useEffect(() => {
        (async () => {
            const char = await axios.get(
                "https://api.jikan.moe/v4/characters/2727"
            );
            console.log(char.data.data)
            setChar(char.data.results);
        })();
    }, []);


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
            <button onClick = {() => handleInput()}>Add</button>
        </div>
    )
}

export default Search;