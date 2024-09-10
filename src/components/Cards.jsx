import { Link } from "react-router-dom"

function Card(props){
    const title = props.title;
    const picture = props.picture;
    const logementId = props.id;

    return (
        <Link to={{pathname:'/logement/' + logementId}} key={logementId}>
            <figure className="App-card" style={{backgroundImage: `linear-gradient(0deg, rgba(0,17,24,0.35) 0%, rgba(255,255,255,0) 27%), url(${picture})`, objectFit: 'contains'}}>
                <figcaption className="App-cardTitle">{title}</figcaption>
            </figure>
        </Link>
    )
}

export default Card