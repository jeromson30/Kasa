import { useRouteError, isRouteErrorResponse} from "react-router-dom";

function RouteError() {
    const error = useRouteError()
  
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return <div style={{display:'flex',flexDirection: 'column', alignContent:'center'}}><h2 className="App-route-error">{error.status}</h2><p className="App-route-errortext">Oups! La page demandée n'existe pas!</p></div>
      }
  
      if (error.status === 401) {
        return <div style={{display:'flex',flexDirection: 'column', alignContent:'center'}}><h2 className="App-route-error">{error.status}</h2><p className="App-route-errortext">Vous n'êtes pas autorisé à voir cette page</p></div>
      }
  
      if (error.status === 503) {
        return <div style={{display:'flex',flexDirection: 'column', alignContent:'center'}}><h2 className="App-route-error">{error.status}</h2><p className="App-route-errortext">Il semble avoir un problème avec l'API</p></div>
      }
  
      if (error.status === 418) {
        return <div style={{display:'flex',flexDirection: 'column', alignContent:'center'}}><h2 className="App-route-error">{error.status}</h2><p className="App-route-errortext">🫖</p></div>
      }
    }
  
    return <div style={{display:'flex',flexDirection: 'column', alignContent:'center'}}><h2 className="App-route-error">{error.status}</h2><p className="App-route-errortext">Quelque chose s'est mal passé.</p></div>
  }

  export default RouteError;