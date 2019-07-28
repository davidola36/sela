import React from 'react';

const project = (props) => {
    //defaulted #EB5757
    //completed #333333
    //notinitiated #9B51E0
    //initiated #27AE60
    //on track to be defaulted #F2994A
    //on track to be completed #828282
    let statusText, statusColor
    switch(props.project.status){
        case 'defaulted':
            statusText = "Defaulted";
            statusColor = '#EB5757';
            break;
        case 'completed':
            statusText = "Completed";
            statusColor = '#333333';
            break;
        case 'not initiated':
            statusText = "Not initiated";
            statusColor = '#9B51E0';
            break;
        case 'initiated':
            statusText = "Initiated";
            statusColor = '#27AE60';
            break;
        case 'to default':
            statusText = "On track to be defaulted";
            statusColor = '#F2994A';
            break;
        case 'to complete':
            statusText = "On track to be completed";
            statusColor = '#828282';
            break;

    }

    return (
        <div className="col-1-of-2 project">
            <div className="project-image--cont">
                <div className="project-image--status" style={{backgroundColor:statusColor}}>{statusText}</div>
                <img src={'/images/' + props.project.image_url} className="project-image" />
                <div className="project-image--progress"><span className="project-image--progressInnerSpan">{props.project.progress}% complete</span><div className="project-image--progressInner" style={{width:props.project.progress + '%'}}> </div></div>
            </div>
            <div className="project-content--cont">
                <h3 className="heading-secondary">{props.project.name}</h3>
                <div className="flex-row project-content--info u-margin-botom-medium u-space-between ">
                <div className="flex-row"><img src="/img/location-marker.svg" className="project-content--icon"/>{props.project.location}</div>
                <div className="flex-row"><img src="/img/money-icon.svg" className="project-content--icon"/>Budget: ${props.project.budget.toLocaleString()}</div>
                </div>
                <p className="project-content--text u-margin-botom-medium">
                    {props.project.description}
                </p>
                <hr className="u-margin-botom-small" style={{borderTop:'1px solid rgba(0, 0, 0, 0.2)'}}/>
                <h5 className="heading-tertiary">Contractors</h5>
                <div className="flex-row" className="project-contractors-cont">
                <img src="/img/header.png"  className="project-contractors-avatar"/>
                </div>
                <a href="#" className="btn-tertiary"><span>view more details</span> <img src="/img/forward-icon.svg" /></a>
            </div>
        </div>
    );
}

export default project