import React, { Component } from 'react';
import MicroModal from 'micromodal'

class Projects extends Component {
  constructor(props) {
    super(props)
  }


  loadPictures(projects) {
    return projects.pictures.map(function(picture) {
       return(
               <div className="swiper-slide">
              <div className="swiper-slide-bg swiper-lazy" data-background={picture.url}>
                <div className="swiper-lazy-preloader"></div>
                </div>
                <div className="caption">{picture.caption}</div>
                </div>
                )
    })
   
  }

  loadDesc(projects) {
    return projects.description.map(function(description) {
      return (
        <li>{description.desc}</li>
        )
    })
  }
  render() {

    if(this.props.data){
      MicroModal.init()
      var self = this;

      var projects = this.props.data.map(function(projects,index){
        return (
      <a className="cell" href="javascript:;" onClick={() => MicroModal.show(index)}>
          <img className="grid-image" src={projects.cover} data-aload={projects.cover} alt={projects.name}/>
          <div className="grid-item-cover">
          <div className="grid-item-cover-bg"></div>
            <div className="grid-content">
              <h3 className="project-name">{projects.name}</h3>
              <br/>
              <h4 className="project-desc">{projects.topic}</h4>
            </div>
          </div>
      </a>)
      })

      var modal = this.props.data.map(function(projects,index){
        return <div className="modal micromodal-slide" id={index} aria-hidden="true">
        <div className="modal__overlay" tabIndex="-1" data-micromodal-close>
          <div
            className="modal__container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-1-title"
          >


          <div className="swiper-container">
          <div className="swiper-wrapper">
          {self.loadPictures(projects)}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          </div>
          <div className="content-container">
          <h2 className="project_name"><a href={projects.link} target="_blank" rel="noopener noreferrer">{projects.name}</a></h2>
                            <div>
                                <span>Role:</span> {projects.role}
                            </div>

                            <div>
                                <span>Technologies:</span> {projects.tech}
                            </div>

                            <ul>
                              {self.loadDesc(projects)}
                            </ul>
                          </div>

            <footer className="modal__footer">
            <a href={projects.link} target="_blank" rel="noopener noreferrer" className="button project-try-button">
                              View Project</a>
              <button
                className="button project-close-button"
                data-micromodal-close
                aria-label="Close this dialog window"
              >
                Close
              </button>
            </footer>
          </div>
        </div>
      </div>
    })

    }

    return (
      <section id="projects">
      <h1 className="projectTitle">Projects</h1>
      <div className="grid-container">
      {projects}
      {modal}
      </div>
    </section>
    );
  }
}

export default Projects;
