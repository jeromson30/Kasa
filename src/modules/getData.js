const GetData = async function(){
    try {
        let results = await fetch('../logements.json')
        results = results.json()
        return results
    }catch(e){
        console.log(e.message)
    }
}

export default GetData