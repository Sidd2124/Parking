import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Task from './Task/Task'


import './App.css';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Task" component={Task} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
