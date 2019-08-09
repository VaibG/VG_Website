import React, { Component } from 'react';

class Experience extends Component {

  constructor(props) {
    super(props)
  }

  
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info fadeIn">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p className="fadeIn">{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info fadeIn">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p className="fadeIn">{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills
    }

    return (
      <section id="experience">

      <div className="row education">
         <div className="three columns header-col">
            <h1 className="fadeIn"><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1 className="fadeIn"><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1 className="fadeIn"><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
              <p className="info fadeIn">{skills}</p>
        </div>
      </div>
   </section>
    );
  }
}

export default Experience;
