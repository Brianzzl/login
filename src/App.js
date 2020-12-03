import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './screen/Login.js'
import Register from './screen/Register.js'

function App() {
  return (
      <Router>
        <div className="App">
        {/* <p>haha</p> */}
        <Route path='/login' component={Login} exact />
        <Route path='/register' component={Register} />
        </div>
    </Router>

  );
}

export default App;
