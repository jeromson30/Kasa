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
            <div style={{marginTop: '20px',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center'}}>
                <Collapse collapseTitle='Fiabilité' collapseWidth='70%' collapseText={text} collapseTitleSize='24px'/>
                <Collapse collapseTitle='Respect' collapseWidth='70%' collapseText={text} collapseTitleSize='24px'/>
                <Collapse collapseTitle='Service' collapseWidth='70%' collapseText={text} collapseTitleSize='24px'/>
                <Collapse collapseTitle='Sécurité' collapseWidth='70%' collapseText={text} collapseTitleSize='24px'/>
            </div>
        </main>
    )
  }
  
  export default About