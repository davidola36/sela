import React from 'react';

const header = () => {
    return (
        <header className="header">
          <a href="#" className="btn u-margin-top-primary">sela</a>
          <div className="u-absolute-center heading-primary ">
            <h1 className="heading-primary--main">Keep track of development projects near you</h1>
            <h2 className="heading-primary--sub ">The Sela Platform enables stakeholders share real time information on the state of infrastructure projects to ensure transparent delivery</h2>
          </div>
          <a href="#projects" className="btn-secondary u-absolute-horizontal-center">see projects <img src="/img/expand-icon.svg" alt="expand icon" className="btn-secondary--icon" /></a>
        </header>
    )
}

export default header