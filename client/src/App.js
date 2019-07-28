import React, { Component } from 'react';
import Map from './components/map';
import { getProjects } from './api';
import Project from './components/project';

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
        <header className="header">
          <a href="#" className="btn u-margin-top-primary">sela</a>
          <div className="u-absolute-center heading-primary ">
            <h1 className="heading-primary--main">Keep track of development projects near you</h1>
            <h2 className="heading-primary--sub ">The Sela Platform enables stakeholders share real time information on the state of infrastructure projects to ensure transparent delivery</h2>
          </div>
          <a href="#projects" onClick={this.scrollDown} className="btn-secondary u-absolute-horizontal-center">see projects <img src="/img/expand-icon.svg" alt="expand icon" className="btn-secondary--icon" /></a>
        </header>
        <main>
          <div className="flex-row search-bar">
            <div className="flex-1-of-3 search-bar--description">
                search projects by location
            </div>

            <div className="flex-2-of-3">
              <input type="text" placeholder="Ikorodu, Lagos" className="search-bar--input"/>
            </div>
          </div>
          <div className="map" id="map">
            <Map />
          </div>
          <div className="section-project" id="projects">
            <div className="flex-row cont project-sorter">
              <div className="project-sorter--label">All Projects</div>
              <div className="project-sorter--cont">
                <span>Sort by</span>
                <span>Budget <img src="/img/expand-icon.svg" alt="sort icon" className="project-sorter--icon" /></span>
                <span>Start Date <img src="/img/expand-icon.svg" alt="sort icon" className="project-sorter--icon" /></span>
                <span>End Date <img src="/img/expand-icon.svg" alt="sort icon" className="project-sorter--icon" /></span>
              </div>
            </div>
            {
              this.state.projects ? 
              <div className="row" >
              {
                this.state.projects.map((item,i)=>{
                  return (
                    
                      <Project key={i} project={item}/>
                    
                  )
                })
              }</div> : null
            }
          </div>
        </main>
        <footer className="row footer u-align-center">
            <div className="u-inline-block">&copy; Sela. 2019	</div>
        </footer>
      </div>
    );
  }
}

export default App;
