import { Routes,Route } from "react-router-dom";
import "./css/App.css"
import Home from "./pages/Homepage";
import Favorites from "./pages/favorites";
import Navbar from "./Components/Navbar";



function App() {
    
 return(
  <>
  <div>
    <Navbar/>
  <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/favorites" element = {<Favorites/>}/>
  </Routes>
  </div>
  </> 
  
 );
     
}



export default App;
