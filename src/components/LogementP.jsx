
import dataLogements from '../logements.json'
import {useParams} from 'react-router-dom'
import Slideshow from './Slideshow';
import Collapse from './Collapse';

function Logement() {
    let { logementId } = useParams();
    let listEquipments
    let tags

    function logementDatas(logementId) {
        let logement = dataLogements.filter((i) =>{
            return i.id === logementId;
        })
        return logement[0]
    }


    let logementInfos = logementDatas(logementId)
 
    if(logementInfos !== null){
        listEquipments = logementInfos.equipments.map((equip, index) =>
            <li key={index}>
            {equip}
            </li>
        )

        tags = logementInfos.tags.map((tag, index) =>
            <span className='App-logement-tag' key={index}>
            {tag}
            </span>
    )};

    return (
        <main>
            <Slideshow pictures={logementInfos.pictures}/>
            
            <article className='App-logement'>
                <h2 className='App-logement-title'>{logementInfos.title}</h2>
                <span className='App-logement-location'>{logementInfos.location}</span>
                <div>
                    <section style={{marginTop: '10px'}}>
                        {tags}
                    </section>
                    <section className='App-logement-collapse'>
                        <Collapse collapseWidth='47%' collapseTitle='Description' collapseText={logementInfos.description} /> 
                        <Collapse collapseWidth='47%' collapseTitle='Equipements' IsList='True' collapseText={listEquipments} />                        
                    </section>
                </div>
            </article>
        </main>
    )
  }
  
  export default Logement