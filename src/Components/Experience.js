import React, { Component } from 'react';
import Tabs from './Tabs.js';

class Experience extends Component {

  constructor(props) {
    super(props)
  }

  
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school} className='row'>
        <div className = 'six columns'>
          <h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        </div>
        <div className = 'offset-six six columns'>
          <p>{education.description}</p>
        </div>
        </div>
      })

      var work = this.props.data.work.map(function(work){
        return <div key={work.company} className='row'>
        <div className = 'six columns'>
          <h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
        </div>
        <div className = 'offset-six six columns'>
            <p>{work.description}</p>
        </div>
        </div>
      })
      
      var orgs = this.props.data.leadership.map(function(orgs){
        return <div key={orgs.org} className='row'>
        <div className = 'six columns'>
          <h3>{orgs.org}</h3>
          <p className="info">{orgs.title}<span>&bull;</span> <em className="date">{orgs.years}</em></p>
        </div>
        <div className = 'offset-six six columns'>
            <p>{orgs.description}</p>
        </div>
        </div>
      })

      var skills = this.props.data.skills
      var interests = this.props.data.interests
    }

      // <div className="row education">
      //    <div className="three columns header-col">
      //       <h1 className="fadeIn"><span>Education</span></h1>
      //    </div>

      //    <div className="nine columns main-col">
      //       <div className="row item">
      //          <div className="twelve columns">
      //            {education}
      //          </div>
      //       </div>
      //    </div>
      // </div>
      //       <div className="row skill">

      //    <div className="three columns header-col">
      //       <h1 className="fadeIn"><span>Skills</span></h1>
      //    </div>
      //    <div className="nine columns main-col">
      //         <p className="info fadeIn">{skills}</p>
      //   </div>
      // </div>
      // <div className="row work">

      //    <div className="three columns header-col">
      //       <h1 className="fadeIn"><span>Work</span></h1>
      //    </div>

      //    <div className="nine columns main-col">
      //     {work}
      //   </div>
      // </div>
    return (
      <section id="experience">
      <h1 className="projectTitle">Experience</h1>
      <Tabs education={education} work={work} skills={skills} interests={interests} orgs={orgs}></Tabs>
      </section>
    );
  }
}

export default Experience;
