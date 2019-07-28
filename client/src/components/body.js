import React from 'react';
import Map from './map';
import Project from './project';



const body = (props) => {
    return (
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
              props.projects ? 
              <div className="row" >
              {
                props.projects.map((item,i)=>{
                  return (
                    
                      <Project key={i} project={item}/>
                    
                  )
                })
              }</div> : null
            }
          </div>
        </main>
    )
}

export default body