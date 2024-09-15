
import dataLogements from '../logements.json'
import {useParams} from 'react-router-dom'
import Slideshow from './Slideshow';
import Collapse from './Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function Logement() {
    let { logementId } = useParams();
    let listEquipments
    let tags
    let host

    function logementDatas(logementId) {
        let logement = dataLogements.filter((i) =>{
            return i.id === logementId;
        })
        return logement[0]
    }
    
    let logementInfos = logementDatas(logementId)

    if(logementInfos !== null){

        host = <div className='App-logement-host'>
                    <div style={{display:'flex',height: '70px',alignItems: 'center'}}><span style={{padding: '10px'}}>{logementInfos.host.name}</span><img src={logementInfos.host.picture} alt={logementInfos.host.name}/></div>
                    <div>
                    {[1, 2, 3, 4, 5].map((star) => {
                            return (  
                                <FontAwesomeIcon icon={faStar} size='lg' style={{marginRight: '5px',color: star <= Number(logementInfos.rating) ? '#FF6060' : 'lightgrey'}}/>
                            )
                        })}
                    </div>
               </div>

        listEquipments = logementInfos.equipments.map((equip, index) =>
            <li key={index}>
            {equip}
            </li>
        )

        tags = logementInfos.tags.map((tag, index) =>
            <span className='App-logement-tag' key={index}>
            {tag}
            </span>
        )
        
        
    };

    return (
        <main>
            <Slideshow pictures={logementInfos.pictures}/>
            <article className='App-logement'>
                <h2 className='App-logement-title'>{logementInfos.title}</h2>
                <span className='App-logement-location'>{logementInfos.location}</span>
                <section style={{marginTop: '20px'}}>
                        {tags}
                 </section>
                 {host}
                 <section className='App-logement-collapse'>
                        <Collapse collapseWidth='47%' collapseTitle='Description' collapseText={logementInfos.description}/> 
                        <Collapse collapseWidth='47%' collapseTitle='Equipements' IsList='True' collapseText={listEquipments}/>                        
                </section>
            </article>
        </main>
    )
  }
  
  export default Logement