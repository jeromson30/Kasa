import PropTypes from 'prop-types'

function Banner(props) {
        const BannerText = props.BannerText;
        const imageBG = props.imageBG;
    return (
            <div style={{backgroundImage: `url(${imageBG})`}} className="App-banner">{BannerText}</div>
    )
}

Banner.propTypes = {
        BannerText: PropTypes.string,
        imageBG: PropTypes.string
}
  
export default Banner