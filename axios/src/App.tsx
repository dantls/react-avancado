import { useEffect } from "react";
import { api } from "./services/api"

function App() {

  async function getTodos(){
    const request = await api.get('todos');

    return request.data
  }

  useEffect(() => {
    getTodos()
      .then(data => console.log(data))
  },[])

  return (
    <div className="App">
    
    </div>
  )
}

export default App
