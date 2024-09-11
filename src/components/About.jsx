import Banner from "./Banner";
import image from "../assets/images/banner_about.webp";
import { useState } from "react";

function About() {
    const [buttonAction, setActif] = useState(false)

    // useEffect(()=>{
    //     buttonAction ? document.querySelector('.App-collapse-text').style.display = null : document.querySelector('.App-collapse-text').style.display = 'none'
    // }, [buttonAction])
    return (
        <main>
            <Banner imageBG={image} />
                <article style={{width: '70%'}}>
                    <div className="App-collapse">Fiabilité 
                        <button className={buttonAction ? "App-collapse-button" : "App-collapse-button collapse-active"} onClick={()=>buttonAction ? setActif(false) : setActif(true)}>V</button></div>
                   
                        <div className={buttonAction ? "App-collapse-text open" : "App-collapse-text"}>
                            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                        </div>
                    
                </article>
        </main>
    )
  }
  
  export default About