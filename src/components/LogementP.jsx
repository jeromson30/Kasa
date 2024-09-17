
import dataLogements from '../logements.json'
import {useParams} from 'react-router-dom'
import Slideshow from './Slideshow';
import Collapse from './Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';


function Logement() {
    let { logementId } = useParams();
    let listEquipments
    let tags
    let host

    //Fonction qui recupère les informations du logement grace à l'ID
    function logementDatas(logementId) {
        let logement = dataLogements.filter((i) =>{
            return i.id === logementId;
        })
        return logement[0]
    }
    
    // Stockage des informations du logement.
    let logementInfos = logementDatas(logementId)

    // Si logementInfos contient des informations alors on alimente la page
    if(logementInfos !== null){

         // Chargement des informations de l'hôte
        host = <div className='App-logement-host'>
                    <div style={{display:'flex',height: '64px',alignItems: 'center'}}><span style={{fontSize: '20px',lineHeight: '25px', padding: '10px'}}>{logementInfos.host.name}</span><img src={logementInfos.host.picture} alt={logementInfos.host.name}/></div>
                    <div className='App-logement-host-rating'>
                    {[1, 2, 3, 4, 5].map((star, index) => {
                            return (  
                                <FontAwesomeIcon key={index} icon={faStar} size='lg' style={{marginRight: '5px',color: star <= Number(logementInfos.rating) ? '#FF6060' : 'lightgrey'}}/>
                            )
                        })}
                    </div>
               </div>
        // Chargement des informations des équipements présents dans le logement
        listEquipments = logementInfos.equipments.map((equip, index) =>
            <li key={index}>
            {equip}
            </li>
        )

        // Chargement des tags (mots clés liés au logement)
        tags = logementInfos.tags.map((tag, index) =>
            <span className='App-logement-tag' key={index}>
            {tag}
            </span>
        )
    };

    // Si logementInfos, alors on change le titre de la page
    useEffect(() => {
        document.title = logementInfos.title !== null ? `Kasa - Logement : ${logementInfos.title}` : 'Kasa : Chez vous, partout et ailleurs';
    },[logementInfos]);

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
                        <Collapse collapseTitle='Description' collapseWidth='47%' collapseText={logementInfos.description}/>
                        <Collapse collapseTitle='Equipements' collapseWidth='47%' IsList='True' collapseText={listEquipments}/>                        
                </section>
            </article>
        </main>
    )
  }
  
  export default Logement