const Character = (char) => {
    char = char.char
    
    return(
        <div>
            <a
                href = {char.url}
                target = "_blank"
                rel= "noreferrer"
            >
                <img
                    alt = {char.name}
                    src = {char.images.jpg.image_url}
                />
            </a>
            <p>{char.name}</p>
        </div>
    )
}

export default Character;