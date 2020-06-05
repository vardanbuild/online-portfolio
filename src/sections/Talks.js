import React from 'react';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

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
        <Section.Header name="Talks" icon="🙋‍♂️" label="person" />
    </Section.Container>
);

export default Talks;