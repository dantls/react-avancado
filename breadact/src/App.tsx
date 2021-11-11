import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          
        <Route path='/'element={<Navigate replace to="/production"/>}/>
        <Route path='/production' element={<h1>Produção</h1>}/>
        <Route path='/stock' element={<h1>Estoque</h1>}/>
      </Routes>
    </Router>
    
  )
}

export default App
