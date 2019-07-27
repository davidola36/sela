import React, { Component } from 'react';
import Map from './components/map';
import './App.css';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class App extends Component {
  render(){
    return (
      <div>
        <header className="header">
          <a href="#" className="btn u-margin-top-primary">sela</a>
          <div className="u-absolute-center">
            <h1 className="heading-primary--main heading-primary">Keep track of development projects near you</h1>
            <h2 className="heading-primary--sub heading-primary">The Sela Platform enables stakeholders share real time information on the state of infrastructure projects to ensure transparent delivery</h2>
          </div>
          <a href="#" className="btn-secondary u-absolute-horizontal-center">see projects <img src="/img/expand-icon.svg" className="btn-secondary--icon" /></a>
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
          <div className="section-project">
            <div className="flex-row cont project-sorter">
              <div className="project-sorter--label">All Projects</div>
              <div className="project-sorter--cont">
                <span>Sort by</span>
                <span>Budget <img src="/img/expand-icon.svg" className="project-sorter--icon" /></span>
                <span>Start Date <img src="/img/expand-icon.svg" className="project-sorter--icon" /></span>
                <span>End Date <img src="/img/expand-icon.svg" className="project-sorter--icon" /></span>
              </div>
            </div>
            <div className="row">
              <div className="col-1-of-2 project">
                <div className="project-image--cont">
                  <img src="/img/header.png" className="project-image" />
                </div>
                <div className="project-content--cont">
                  <h3 className="heading-secondary">Construction of Borehole</h3>
                  <div className="flex-row project-content--info u-margin-botom-medium u-space-between ">
                    <div className="flex-row"><img src="/img/location-marker.svg" className="project-content--icon"/>Ikorodu, Lagos</div>
                    <div className="flex-row"><img src="/img/money-icon.svg" className="project-content--icon"/>Budget: $50,000.00</div>
                  </div>
                  <p className="project-content--text u-margin-botom-medium">
                    The people of Ikorodu have long sought for a solution 
                    to the perennial water crisis plaguing the community. 
                    Help came when community members took action
                    and decided to solve the problem...Read more 
                  </p>
                  <hr className="u-margin-botom-small" style={{borderTop:'1px solid rgba(0, 0, 0, 0.2)'}}/>
                  <h5 className="heading-tertiary">Contractors</h5>
                  <div className="flex-row" className="project-contractors-cont">
                    <img src="/img/header.png"  className="project-contractors-avatar"/>
                  </div>
                  <a href="#" className="btn-tertiary"><span>view more details</span> <img src="/img/forward-icon.svg" /></a>
                </div>
              </div>
              <div className="col-1-of-2 project">
                <div className="project-image--cont">
                  <img src="/img/header.png" className="project-image" />
                </div>
                <div className="project-content--cont">
                  <h3 className="heading-secondary">Construction</h3>
                  <div className="flex-row project-content--info u-margin-botom-medium u-space-between ">
                    <div className="flex-row"><img src="/img/location-marker.svg" className="project-content--icon"/>Ikorodu, Lagos</div>
                    <div className="flex-row"><img src="/img/money-icon.svg" className="project-content--icon"/>Budget: $50,000.00</div>
                  </div>
                  <p className="project-content--text u-margin-botom-medium">
                    The people of Ikorodu have long sought for a solution 
                    to the perennial water crisis plaguing the community. 
                    Help came when community members took action
                    and decided to solve the problem...Read more 
                  </p>
                  <hr className="u-margin-botom-small" style={{borderTop:'1px solid rgba(0, 0, 0, 0.2)'}}/>
                  <h5 className="heading-tertiary">Contractors</h5>
                  <div className="flex-row" className="project-contractors-cont">
                    <img src="/img/header.png"  className="project-contractors-avatar"/>
                  </div>
                  <a href="#" className="btn-tertiary">view more details <img src="/img/forward-icon.svg" /></a>
                </div>
              </div>
            </div>
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
