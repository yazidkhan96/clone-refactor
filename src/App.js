import Home from './pages/Home';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import CoursePage from './pages/Course';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/kelas" component={CoursePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
