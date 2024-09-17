import Banner from "./Banner";
import Gallery from "./Gallery";
import image from "../assets/images/banner_slogan.webp";
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.title = 'Kasa : Chez vous, partout et ailleurs'
    },[]);

    return (
        <main>
            <Banner imageBG={image} BannerText="Chez vous, partout et ailleurs"/>
            <Gallery />
        </main>
    )
  }
  
  export default Home