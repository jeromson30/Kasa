

function Banner(props) {
        const BannerText = props.BannerText;
        const imageBG = props.imageBG;
    return (
            <div style={{backgroundImage: `url(${imageBG})`}} className="App-banner">{BannerText}</div>
    )
  }
  
  export default Banner