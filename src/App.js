import './App.css';
import {useContext} from "react"
import Navbar from './components/Navbar/Navbar'
import Banner from "./components/Banner/Banner"
import Footer from './components/Footer/Footer';
import ChallengeSection from "./components/ChallengeSection/ChallengeSection"
import AppContext from "./Context/AppContext"

function App() {

  
  return (
    <div className="App">

      <Navbar/>
      <Banner/>
      <AppContext>
        <ChallengeSection/>
      </AppContext>
      <Footer/>

      {/* Navabar 
      Banner 
      Main 
      Footer */}
    </div>
  );
}

export default App;
