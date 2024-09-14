import { useRouteError, isRouteErrorResponse} from "react-router-dom";

function RouteError() {
    const error = useRouteError()
  
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return <div><h2>{error.status}</h2><p>Oups! La page demandée n'existe pas!</p></div>
      }
  
      if (error.status === 401) {
        return <div><h2>{error.status}</h2><p>Vous n'êtes pas autorisé à voir cette page</p></div>
      }
  
      if (error.status === 503) {
        return <div><h2>{error.status}</h2><p>Il semble avoir un problème avec l'API</p></div>
      }
  
      if (error.status === 418) {
        return <div><h2>{error.status}</h2><p>🫖</p></div>
      }
    }
  
    return <div><h2>{error.status}</h2><p>Quelque chose s'est mal passé.</p></div>
  }

  export default RouteError;