import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

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
      width={['20vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 10%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 5%;
  }
`;

const CARD_WIDTH = '50px';

const MEDIA_QUERY_SMALL = '@media (max-width: 500px)';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  width: calc(100% - ${CARD_WIDTH});
  border: 1px solid #A9A9A9;
  border-radius: 8px;

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_WIDTH} / 2));
  }
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="About me" icon="🙋‍♂️" label="person" />
    <StaticQuery
      query={graphql`
      query AboutMeQuery {
        contentfulAbout {
          profile {
            title
            image: resize(width: 450, quality: 100) {
              src
            }
          }
        }
        allContentfulAbout {
          edges {
            node {
              details
            }
          }
        }
      }
      `}
      render={(data) => {
        const { contentfulAbout, allContentfulAbout } = data
        const { profile } = contentfulAbout;
        const { details } = allContentfulAbout?.edges[0].node;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <Fade bottom>
                {details.map(detail => <TextContainer>{detail}</TextContainer>)
                }
              </Fade>
            </Box>
            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: '300px', margin: 'auto' }}
            >
              <Fade right>
                <ProfilePicture
                  src={profile.image.src}
                  alt={profile.title}
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                />
              </Fade>
            </Box>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default About;
