import { useState } from 'react';

const Search = () => {
    const [id, setId] = useState("");
    const handleInput = () => {
        console.log(id);
    };

    return(
        <div>
            <input placeholder = "char ID" onChange = {e => setId = (e.target.value)}/>
            <button onClick = {() => handleInput()}>Add</button>
        </div>
    )
}

export default Search;