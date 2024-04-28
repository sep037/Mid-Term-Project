import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hobby from './components/Hobby/Hobby';
import Developer from './components/Developer/Developer';

const App = () => {
  return (
    <div className="App">
      < NavBar />
      < Home />
      < About />
      < Hobby />
      < Developer />
      < Contact />
    </div>
  );
}

export default App;