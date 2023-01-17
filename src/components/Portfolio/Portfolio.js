import React from 'react'
import './portfolio.css';
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard';


function Portfolio() {
  return (
    <Container fluid className='port__portfolio section__padding' id='Portfolio'>
      <Container>
        <h1 className='gradient__text port__portfolio-heading'>My recent Projects</h1>
        <p className='port__portfolio-subtext'> These projects were built with the following languages and frameworks: HTML,
        CSS, JavaScript, Express.js, Node.js, MySQL and bootstrap.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: "px" }}>
        <Col md={4} className="project-card">
        <ProjectCard
        title="Explor"
        description="A National Park Finder"
        ghLink="https://github.com/rarellano5280/National-Park-Finder"
        />
       </Col>

       <Col md={4} className="project-card">
        <ProjectCard
        title="Scheduler"
        description="A work day Scheduler"
        ghLink="https://github.com/rarellano5280/work-day-scheduler"
        />
       </Col>

       <Col md={4} className="project-card">
        <ProjectCard
        title="Fitness Culture"
        description="A fitness app"
        ghLink="https://github.com/rarellano5280/Fitness-Culture"
        />
       </Col>

       <Col md={4} className="project-card">
        <ProjectCard
        title="Note Taker"
        description="A note taking app"
        ghLink="https://github.com/rarellano5280/Note-Taker"
        />
       </Col>

       <Col md={4} className="project-card">
        <ProjectCard
        title="Text Editor"
        description="Just another text editor"
        ghLink="https://github.com/rarellano5280/PWA-Text-Editor"
        />
       </Col>
      </Row>
    </Container>
    </Container>
  );
}

export default Portfolio