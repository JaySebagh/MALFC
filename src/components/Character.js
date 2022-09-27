import './sass/Character.sass'

const Character = (char) => {
    char = char.char
    
    return(
        <div className = "charCard">
            <a
                href = {char.url}
                target = "_blank"
                rel= "noreferrer"
            >
                <img
                    alt = {char.name}
                    src = {char.images.jpg.image_url}
                    className = "charImg"
                />
            </a>
            <p className="charName">{char.name}</p>
        </div>
    )
}

export default Character;