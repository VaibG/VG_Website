import React, { Component } from 'react';

class About extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic = "images/"+this.props.data.image;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <p><img className="profile-pic"  src={profilepic} alt="Vaib Profile Pic" /></p>
            <p className="hobbies"><span>Interests</span><br/>Drums<br/>Tennis<br/>Golf<br/>Travel<br/>Coding<br/>Chess<br/>TV Shows<br/>Reading<br/></p>
         </div>
         <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>Hi there, I'm <span>Vaib</span>. I’m currently a <span>student</span> majoring in 
          <span> Computer Science </span>
           at the <span>University of California, Berkeley</span>. I’m an international student from <span>Singapore. </span> 
            After finishing high school, I served two years in the Singapore army as a <span>Section Commander.</span>
           <br/>
           <br/>
           I aim to leverage technology to positively <span>impact</span> individual's lives on a large-scale. 
           I am a strong believer that technology acts as a bridge to devise <span>solutions</span> in all areas of life. 
           When not working on projects, I try to keep myself busy with my various interests. 
           <br/>
           <br/>
           I have learnt a lot about <span>leadership;</span> but most importantly, it taught me there is always more to learn. 
           I cherish every experience I have, and know that every person I meet can teach me something about myself and about life.
           I'm someone who is eager to <span>learn</span> and am always looking for the next <span>challenge.</span>
           </p>
            <div className="row">
               <div className="columns centered download">
                  <p>
                     <a href={resumeDownload} className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
         </div>
        </div>
      </div>

   </section>
    );
  }
}

export default About;