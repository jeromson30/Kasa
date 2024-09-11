import Banner from "./Banner";
import Gallery from "./Gallery";
import image from "../assets/images/banner_slogan.webp";

function Home() {
    return (
        <main>
            <Banner imageBG={image} BannerText="Chez vous, partout et ailleurs"/>
            <Gallery />
        </main>
    )
  }
  
  export default Home