import Banner from "./Banner";
import image from "../assets/images/banner_about.webp";
import Collapse from "./Collapse";

function About() {
    const text = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
    // useEffect(()=>{
    //     buttonAction ? document.querySelector('.App-collapse-text').style.display = null : document.querySelector('.App-collapse-text').style.display = 'none'
    // }, [buttonAction])

    return (
        <main>
            <Banner imageBG={image} />
            <Collapse collapseWidth='70%' collapseText={text}/>
        </main>
    )
  }
  
  export default About