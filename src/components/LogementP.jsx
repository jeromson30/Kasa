
import dataLogements from '../logements.json'
import {useParams} from 'react-router-dom'
import Slideshow from './Slideshow';

function Logement() {
    let { logementId } = useParams();

    function logementDatas(logementId) {
        let logement = dataLogements.filter((i) =>{
            return i.id === logementId;
        })
        return logement[0]
    }

    let logementInfos = logementDatas(logementId)
 
    
    const listEquipments = logementInfos.equipments.map((equip) =>
        <li key={equip.toString()}>
          {equip}
        </li>
    );

    return (
        <main>
            <Slideshow pictures={logementInfos.pictures}/>
            
            <article>
                <h2>{logementInfos.title}</h2>
                <span>{logementInfos.location}</span>
                <div>
                    <section>
                        <h3>Description</h3>
                        <span>{logementInfos.description}</span>
                    </section>
                    <section>
                        <h3>Equipements</h3>
                        <ul>{listEquipments}</ul>
                    </section>
                </div>
            </article>
        </main>
    )
  }
  
  export default Logement