import './App.css';
import Body from "./components/body";
import Whoweare from "./components/whoweare"
import Mission from './components/mission';
import Footer from "./components/footer";
import Help from "./components/help";
import Sponsor from "./components/sponsors.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <Body/>
    <Whoweare/>
    <Mission/>
    <Help/>
    <Sponsor/>
    <Footer/>
    </div>
  );
}

export default App;
