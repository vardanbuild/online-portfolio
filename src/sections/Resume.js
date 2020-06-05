import React from 'react';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { StaticQuery, graphql } from 'gatsby';
import { CardContainer, Card } from '../components/Card';
import Fade from 'react-reveal/Fade';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const Resume = () => (
    <Section.Container id="about" Background={Background}>
        <Section.Header name="Resume" icon="📑" label="person" />
        <StaticQuery
      query={graphql`
      query ResumeQuery {
        contentfulResume {
          resumeUrl
        }
      }
      `}
      render={({contentfulResume}) => {
        const resumeUrl = contentfulResume?.resumeUrl
        return <CardContainer minWidth="350px">
            <Fade bottom key={resumeUrl}>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Latest Resume</a>
            </Fade>
        </CardContainer>
      }}
    />
    </Section.Container>
);

export default Resume;