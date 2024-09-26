import {useEffect} from 'react'
import Slideshow from './Slideshow'
import Collapse from './Collapse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

function Logement(props) {
    let tags
    let listEquipments
    // Nous recupérons la props data qui contient tous les informations du logement.
    let data = props.data

    // Création de la liste des équipements
    listEquipments = data.equipments.map((equip, index) =>
        <li key={index}>
        {equip}
        </li>
    )

    // Chargement des tags (mots clés liés au logement)
    tags = data.tags.map((tag, index) =>
        <span className='App-logement-tag' key={index}>
        {tag}
        </span>
    )

    // Au chargement de la page on défini le titre de la page contenant le nom du logement
    useEffect(() => {
        document.title = `Kasa : Logement - ${data.title}`
    },[data]);

    return (
        <main>  

                {/* Chargement du composent Carrousel */}
                <Slideshow pictures={data.pictures}/>
                <article className='App-logement'>
                    <h2 className='App-logement-title'>{data.title}</h2>
                    <span className='App-logement-location'>{data.location}</span>
                    <section style={{marginTop: '20px'}}>
                            {tags}
                    </section>
                    <div className='App-logement-host'>
                        <div style={{display:'flex',height: '64px',alignItems: 'center'}}><span style={{fontSize: '20px',lineHeight: '25px', padding: '10px'}}>{data.host.name}</span><img src={data.host.picture} alt={data.host.name}/></div>
                        {/* Système de notation avec les étoiles */}
                        <div className='App-logement-host-rating'>
                        {[1, 2, 3, 4, 5].map((star, index) => {
                                return (  
                                    <FontAwesomeIcon key={index} icon={faStar} size='lg' style={{marginRight: '5px',color: star <= Number(data.rating) ? '#FF6060' : 'lightgrey'}}/>
                                )
                            })}
                        </div>
                </div>
                    {/* Chargement de la section contenant les composants collapses pour la description et la liste des equipements*/}
                    <section className='App-logement-collapse'>
                            <Collapse collapseTitle='Description' collapseWidth='47%' collapseText={data.description}/>
                            <Collapse collapseTitle='Equipements' collapseWidth='47%' IsList={true} collapseText={listEquipments}/>                        
                    </section>
                </article>
        </main>
    )
  }
  

Logement.propTypes = {
    data: PropTypes.object
}

  export default Logement