import React from 'react'
import './portfolio.css';
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard';


function Portfolio() {
  return (
    <Container fluid className='port__portfolio section__padding' id='Portfolio'>
      <Container>
        <h1 className='gradient__text port__portfolio-heading'>My recent Projects</h1>
        <p className='port__portfolio-subtext'> 'These projects were built with the following languages and frameworks</p>


        <Row style={{ justifyContent: 'center', paddingBottom: "px" }}>
        <Col md={4} className="project-card">
        <ProjectCard
        title="Explor"
        description="Blah Blah Blah"
        ghLink="https://github.com/rarellano5280/National-Park-Finder"
        />
       </Col>

       <Col md={4} className="project-card">
        <ProjectCard
        title="Explor"
        description="Blah Blah Blah"
        ghLink="https://github.com/rarellano5280/National-Park-Finder"
        />
       </Col>

       <Col md={4} className="project-card">
        <ProjectCard
        title="Explor"
        description="Blah Blah Blah"
        ghLink="https://github.com/rarellano5280/National-Park-Finder"
        />
       </Col>

       <Col md={4} className="project-card">
        <ProjectCard
        title="Explor"
        description="Blah Blah Blah"
        ghLink="https://github.com/rarellano5280/National-Park-Finder"
        />
       </Col>

       <Col md={4} className="project-card">
        <ProjectCard
        title="Explor"
        description="Blah Blah Blah"
        ghLink="https://github.com/rarellano5280/National-Park-Finder"
        />
       </Col>
      </Row>
    </Container>
    </Container>
  );
}

export default Portfolio