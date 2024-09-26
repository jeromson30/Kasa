import Header from '../components/Header';
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import image from "../assets/images/banner_slogan.webp";
import Footer from '../components/Footer';
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.title = 'Kasa : Chez vous, partout et ailleurs'
    },[]);

    return (
        <div className="App">
            <div className="App-container">
                <Header/>
                <main>
                    <Banner imageBG={image} BannerText="Chez vous, partout et ailleurs"/>
                    <Gallery />
                </main>
            </div>
            <Footer/>
        </div>
    )
  }
  
  export default Home