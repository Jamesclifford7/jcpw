import './App.css';
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
