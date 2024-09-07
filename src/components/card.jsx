function Card({title, picture}){
    return (
        <figure className="App-card" style={{backgroundImage: `url(${picture})`}}>
            <span>{title}</span>
        </figure>
    )
}

export default Card