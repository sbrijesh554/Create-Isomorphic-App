import React from "react";
import { Route } from 'react-router-dom';

export default class App extends React.Component {

  constructor(props){
    super(props);

  }
  render(){
        return (
          <div>
            {/* <Route exact path='/' component={Test} /> */}
            {/* <Test></Test> */}
              {/* <Route path="/hoc" component={sample}/>
              <Route exact path='/' component={Home} />
              <Route path='/newview' component={NewView} /> */}
          </div>
      );
  }
};


