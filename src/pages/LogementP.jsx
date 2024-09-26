import Header from "../components/Header";
import Footer from "../components/Footer";
import dataLogements from '../logements.json'
import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Logement from '../components/Logement'


function LogementPage() {
    // useParams recupère ID du logement via l'URL.
    let { logementId } = useParams()

    // useNavigate pour rediriger vers la page d'erreur.
    const navigate = useNavigate();

    // useState pour creer un etat logement si les des données sont trouvées.
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        // recherche des données liées à l'ID recuperée avec useParams() dans le fichier JSON.
        const logementData = dataLogements.find((i) => 
            i.id === logementId
        )
        // Si logementData est vide, renvoi vers la page d'erreur.
        if (!logementData) {
        navigate('/Error')
        return;
        }

        // Ici on considère que logementData contient des données et on change l'état de logement avec setLogement.
        setLogement(logementData)
    }, [logementId, navigate])


    // Si logement n'est pas définie on retourne une div avec 'Veuillez patienter' pour eviter une erreur avant que le render soit à nouveau executé au changement d'état de logement.
    if (!logement) {
        return(
        <div className="App">
            <div className="App-container">
                <Header/>
                <main>
                    <p>Veuillez patienter...</p>
                </main>
            </div>
            <Footer />
        </div>)
    }
    
    return(<div className="App">
            <div className="App-container">
                <Header/>
                <Logement data={logement} />
            </div>
            <Footer />
        </div>)
}
  export default LogementPage