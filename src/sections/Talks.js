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
        height={['80vh', '80vh']}
        width={['100vw', '100vw']}
        invertX
      />
  
      <Triangle
        color="primaryDark"
        height={['25vh', '40vh']}
        width={['75vw', '60vw']}
        invertX
        invertY
      />
  
      <Triangle
        color="backgroundDark"
        height={['25vh', '20vh']}
        width={['100vw', '100vw']}
        invertY
      />
    </div>
  );

const Talks = () => (
    <Section.Container id="about" Background={Background}>
        <Section.Header name="Talks" icon="🎙" label="person" />
        <StaticQuery
      query={graphql`
      query TalksQuery {
        allContentfulTalks {
        nodes {
            topic
            presentationUrl
                }
        }
      }
      `}
      render={({allContentfulTalks}) => (
        <CardContainer minWidth="350px">
          {allContentfulTalks.nodes.map((p, i) => {
              const presentationUrl = p?.presentationUrl
              console.log(presentationUrl)
            return <Fade bottom delay={i * 200} key={presentationUrl}>
                <a href={presentationUrl} target="_blank" rel="noopener noreferrer">{p.topic}</a>
            </Fade>
      })}
        </CardContainer>
      )}
    />
    </Section.Container>
);

export default Talks;