import React from 'react';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { StaticQuery, graphql } from 'gatsby';
import { CardContainer, Card } from '../components/Card';
import Fade from 'react-reveal/Fade';
import { Text, Flex, Box } from 'rebass/styled-components';
import SocialLink from '../components/SocialLink';
import styled from 'styled-components';

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

const CARD_HEIGHT = '100px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const Resume = () => (
  <Section.Container id="resume" Background={Background}>
    <Section.Header name="Resume" icon="📑" label="resume" />
    <StaticQuery
      query={graphql`
        query ResumeQuery {
          contentfulResume {
            resumeUrl
          }
        }
      `}
      render={({ contentfulResume }) => {
        const resumeUrl = contentfulResume?.resumeUrl;
        return (
          <CardContainer minWidth="200px">
            <Fade bottom key={resumeUrl}>
              <Card p={0}>
                <Flex style={{ height: CARD_HEIGHT }}>
                  <TextContainer>
                    <Text
                      width={[1]}
                      style={{
                        overflow: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      color="text"
                    >
                      View latest resume
                    </Text>
                  </TextContainer>
                  <ImageContainer>
                    <Flex
                      style={{
                        float: 'left',
                      }}
                    >
                      <Box mx={2} fontSize={50}>
                        <SocialLink
                          name="View Resume"
                          fontAwesomeIcon="google"
                          url={resumeUrl}
                        />
                      </Box>
                    </Flex>
                  </ImageContainer>
                </Flex>
              </Card>
            </Fade>
          </CardContainer>
        );
      }}
    />
  </Section.Container>
);

export default Resume;
