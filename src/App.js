import './App.css';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

import React, { useState } from "react";

function App() {
  const [user, setUser] = useState([])
  const history = useHistory();

  const onRegister = (data) => {

    if(user) {
      setUser([...user, data])
      history.push(`/landing/${data.nome}`)
    } 
  }

  return (
    <div className="App">
      <header className="App-header">
          <Switch>
            <Route exact path="/"> 
              <Register onRegister={onRegister}/>
            </Route> 
            <Route exact path="/landing/:nome">
              <LandingPage user={user}/> 
            </Route> 
        </Switch>
      </header>
    </div>
  );
}

export default App;
