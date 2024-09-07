import image from "../assets/images/section_slogan.webp";

function Banner() {
    return (
            <div style={{backgroundImage: `url(http://localhost:3000${image})`}} className="App-banner">Chez vous, partout et ailleurs</div>
    )
  }
  
  export default Banner