import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
import "../styles/work.scss"

import data from "../myData"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>JavaScript and ReactJS</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                  githubLink={project.github}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Python Projects</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.pythonProjects.map((project, index) => (
                  <Card
                      key={index}
                      heading={project.title}
                      paragraph={project.para}
                      imgUrl={project.imageSrc}
                      githubLink={project.github}
                  ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
