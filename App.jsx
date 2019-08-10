import React from "react";
import Home from './components/Home.jsx'
import NewView from './components/NewView.jsx';
import { Route } from 'react-router-dom';
export default class App extends React.Component {

  constructor(props){
    super(props);

  }
  render(){
        return (
          <div>
              <Route exact path='/' component={Home} />
              <Route path='/newview' component={NewView} />
          </div>
      );
  }
};
