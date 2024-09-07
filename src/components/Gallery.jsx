import Card from './card'
import GetData from "../modules/getData";

function Gallery(){

    return (
        <section className="App-Gallery">
            {console.log(GetData())}
            <Card title='Test' picture='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg'/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </section>
    )
}

export default Gallery