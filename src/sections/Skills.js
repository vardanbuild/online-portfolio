import React from 'react';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { StaticQuery, graphql } from 'gatsby';

import { Flex } from 'rebass';

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

const tagStyle = {
    background: "orange",
    "width": "fit-content",
    margin: "5px",
    "border-radius": "8px",
    display: "flex",
    "justify-content": "center",
    "padding": "5px 10px",
    "height": "fit-content"
}

const Skills = () => (
    <Section.Container id="skills" Background={Background}>
        <Section.Header name="Skills and Tech Stack" icon="📊" label="skills" />
        <StaticQuery
            query={graphql`
            query SkillsQuery {
                allContentfulSkillsTechStack(sort: {fields: skill}) {
                  edges {
                    node {
                      skill
                    }
                  }
                }
              }
      `}
            render={({ allContentfulSkillsTechStack }) =>
                (<Flex flexDirection={'column'}>
                    <Flex>
                        {allContentfulSkillsTechStack?.edges.slice(0, 3).map(node => (
                            <span style={tagStyle}>{node?.node?.skill}</span>
                        ))}
                    </Flex>
                    <Flex>
                        {allContentfulSkillsTechStack?.edges.slice(3, 6).map(node => (
                            <span style={tagStyle}>{node?.node?.skill}</span>
                        ))}
                    </Flex>
                    <Flex>
                        {allContentfulSkillsTechStack?.edges.slice(6, 9).map(node => (
                            <span style={tagStyle}>{node?.node?.skill}</span>
                        ))}
                    </Flex>
                    <Flex>
                        {allContentfulSkillsTechStack?.edges.slice(9, 13).map(node => (
                            <span style={tagStyle}>{node?.node?.skill}</span>
                        ))}
                    </Flex>
                </Flex>)}
        />
    </Section.Container>
)

export default Skills