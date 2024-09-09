import Card from './Card'
import dataLogements from '../logements.json'
// import GetData from "../modules/getData";

function Gallery(){    
    return (
        <section className="App-Gallery">
                {dataLogements.map(({title, cover, id}) => (
                    <Card title={title} picture={cover} id={id} key={id} />
                ))          
                }
        </section>
    )
}

export default Gallery