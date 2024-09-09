import { Link } from "react-router-dom"

function Card(props){
    const title = props.title;
    const picture = props.picture;
    const logementId = props.id;

    return (
        <Link to={{pathname:'/logement/' + logementId}} key={logementId}>
            <figure className="App-card" style={{backgroundImage: `url(${picture})`, objectFit: 'contains'}}>
                <span className="App-cardTitle">{title}</span>
            </figure>
        </Link>
    )
}

export default Card