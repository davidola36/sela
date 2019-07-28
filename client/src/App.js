import React, { Component } from 'react';
import { getProjects } from './api';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer'

import './App.css';

class App extends Component {
  state = {
    projects: []
  }
  componentDidMount(){
    getProjects()
    .then(res=>{
      this.setState({projects:[...res.data.data]})
    })
    .catch(err=>{
      console.log(err);
    })

  }

  scrollDown = () => {
    document.getElementById('projects').scrollIntoView(true);
  }

  render(){
    return (
      <div>
        <Header />
        <Body projects={this.state.projects}/>
        <Footer />
      </div>
    );
  }
}

export default App;
