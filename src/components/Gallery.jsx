import Card from './Cards'
import dataLogements from '../logements.json'

function Gallery(){    

    // J'aurai pu utiliser la fonction map() dans un useEffect également
    
    return (
        <section className="App-gallery">
                {dataLogements.map(({title, cover, id}) => (
                    <Card title={title} picture={cover} id={id} key={id} />
                ))          
                }
        </section>
    )
}

export default Gallery